"use client";
import React, { useState, useEffect } from 'react';
import { useBrowsers, Browser } from '@/context/BrowsersContext';
import { useAPIKeys } from '@/context/APIKeyContext';
import { Workflow } from '@/context/WorkflowsContext';



interface Props {
  workflow: Workflow;
}

export default function WorkflowRunClient({ workflow }: Props) {
  const { browsers } = useBrowsers();
  const { apiKeys } = useAPIKeys();
  const [selectedBrowser, setSelectedBrowser] = useState<string>('');

  useEffect(() => {
    if (browsers.length > 0 && !selectedBrowser) {
      setSelectedBrowser(browsers[0].device_id);
    }
  }, [browsers, selectedBrowser]);
  const [inputs, setInputs] = useState('{}');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [jsonDialogOpen, setJsonDialogOpen] = useState(false);
  const [jsonDialogContent, setJsonDialogContent] = useState('');

  const openJsonDialog = () => {
    let content = workflow.workflow_file_content;
    if (typeof content === 'string') {
      try {
        content = JSON.parse(content);
      } catch {
        // If parsing fails, use as is
      }
    }
    setJsonDialogContent(content ? JSON.stringify(content, null, 2) : "{}");
    setJsonDialogOpen(true);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setError(null);
    setResult(null);
    try {
      const activeApiKey = apiKeys.find(key => key.is_active === 1);
      if (!activeApiKey) {
        setError('No active API key found');
        setIsRunning(false);
        return;
      }
      const parsedInputs = inputs ? JSON.parse(inputs) : {};
      const res = await fetch(`/api/workflows/${workflow.id}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': activeApiKey.api_key,
        },
        body: JSON.stringify({
          workflowName: workflow.name,
          workflowInputs: parsedInputs,
          browserId: selectedBrowser,
        }),
      });
      const data = await res.json() as { error?: string };
      if (!res.ok) {
        setError(data.error || 'Failed to run workflow');
      } else {
        setResult(JSON.stringify(data, null, 2));
      }
    } catch {
      setError('Failed to run workflow');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{workflow.name}</h1>
      <p className='mb-4'>{workflow.description}</p>
      <div className="mb-4 max-w-sm">
        <label className="block text-sm font-medium mb-2">Choose Browser</label>
        <select
          value={selectedBrowser}
          onChange={(e) => setSelectedBrowser(e.target.value)}
          className="w-full p-2 pr-4 bg-slate-800 text-white rounded"
        >
          {browsers.map((browser: Browser) => (
            <option key={browser.id} value={browser.device_id}>{browser.browser_name}</option>
          ))}
        </select>
      </div>
      {workflow.inputs && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Workflow Inputs</label>
          <div className="bg-slate-900 p-4 rounded max-h-40 overflow-auto">
            <pre className="text-white whitespace-pre-wrap text-xs">{
              (() => {
                let content = workflow.inputs;
                if (typeof workflow.inputs === 'string') {
                  try {
                    content = JSON.parse(workflow.inputs);
                  } catch {
                    // If parsing fails, use as is
                  }
                }
                return content ? JSON.stringify(content, null, 2) : "{}";
              })()
            }</pre>
          </div>
          <label className="block text-sm font-medium my-2">Your Inputs (key: value)</label>
          <textarea
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
            className="w-full p-2 bg-slate-800 text-white rounded h-16"
            placeholder="Enter inputs as JSON"
          />
        </div>
      )}
      <button
        onClick={handleRun}
        disabled={isRunning}
        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isRunning ? 'Running...' : 'Run Workflow'}
      </button>
      <button
        onClick={openJsonDialog}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-4 cursor-pointer"
      >
        View JSON
      </button>
      {isRunning && (
        <div className="mt-4 text-blue-400 flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Running workflow...
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}
      {result && (
        <div className="mt-4 p-4 bg-slate-800 rounded relative">
          <h2 className="text-lg font-bold mb-2">Result</h2>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="absolute top-2 right-2 p-1 bg-slate-700 hover:bg-slate-600 rounded text-white text-sm"
            title="Copy to clipboard"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <pre className="text-white whitespace-pre-wrap max-h-96 overflow-y-auto">{result}</pre>
        </div>
      )}
      {jsonDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg max-w-2xl w-full">
            <h2 className="text-xl font-bold text-white mb-4">Workflow JSON</h2>
            <div className="bg-slate-900 p-4 rounded max-h-60 overflow-auto">
              <pre className="text-white whitespace-pre-wrap text-sm">{jsonDialogContent}</pre>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                onClick={() => setJsonDialogOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
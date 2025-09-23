"use client";
import { useState } from "react";
import { useAPIKeys, APIKey } from "../../../context/APIKeyContext";
import NoAPIKeyYet from "./NoAPIKeyYet";
import APIKeysTable from "./APIKeysTable";
import APIKeyDialog from "./APIKeyDialog";

const listWorkflowsCurl = `curl -X GET "https://api.autopilotbrowser.com/wf/search?website=example.com" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

const syncCurl = `curl -X POST "https://api.autopilotbrowser.com/wf/run" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '&lbrace;
    "workflowName": "tvsMagazineScheduleBrowser",
    "workflowInputs": &lbrace;
      "isEnglish": true
    &rbrace;
  &rbrace;'`;

const asyncCurl = `curl -X POST "https://api.autopilotbrowser.com/wf/run" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-task-mode: async" \\
  -H "Content-Type: application/json" \\
  -d '&lbrace;
    "workflowName": "tvsMagazineScheduleBrowser",
    "workflowInputs": &lbrace;
      "isEnglish": false
    &rbrace;
  &rbrace;'`;

const listSuccess = `&lbrace;
  "workflows": [
    &lbrace;
      "name": "tvsMagazineScheduleBrowser",
      "description": "Extracts TV magazine schedule data"
    &rbrace;,
    &lbrace;
      "name": "formAutomation",
      "description": "Automates form filling and submission"
    &rbrace;
  ]
&rbrace;`;

const listError = `&lbrace;
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
&rbrace;`;

const syncSuccess = `&lbrace;
  "referenceId": 200,
  "workflowResult": &lbrace;
    "dateInfo": &lbrace;
      "date": "September 23, 2025"
    &rbrace;,
    "schedules": [
      &lbrace;
        "movieTime": "20:00",
        "movieTitle": "Sample Movie Title",
        "moviePoster": "https://example.com/poster.jpg",
        "yearAndGenre": "2024 - Action/Drama",
        "movieSynopsis": "A sample movie synopsis describing the plot and main themes."
      &rbrace;
    ]
  &rbrace;
&rbrace;`;

const syncFail = `&lbrace;
  "error": "Workflow execution failed",
  "referenceId": 200,
  "details": "Required input 'url' is missing",
  "status": "failed"
&rbrace;`;

const syncError = `&lbrace;
  "error": "Bad Request",
  "message": "Invalid workflow name or missing required inputs"
&rbrace;`;

const asyncSuccess = `&lbrace;
  "referenceId": 201,
  "message": "Workflow run scheduled successfully. You will receive notification at your configured webhook when it is finished."
&rbrace;`;

const asyncFail = `&lbrace;
  "error": "Workflow execution failed",
  "referenceId": 201,
  "details": "Page load timeout after 30 seconds",
  "status": "failed"
&rbrace;`;

const asyncError = `&lbrace;
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Try again in 60 seconds"
&rbrace;`;

const browserOfflineError = `&lbrace;
  "error": "No browser is online or available for the workflow to run on!"
&rbrace;`;

export default function APIKeyDashboard() {
  const { apiKeys, isLoading, error } = useAPIKeys();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editKey, setEditKey] = useState<APIKey | null>(null);

  const handleCreateClick = () => {
    setEditKey(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (key: APIKey) => {
    setEditKey(key);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditKey(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">API Key</h1>
          <p className="text-slate-400">Manage your API keys</p>
        </div>
      </div>

      {/* API Keys Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-4">Your API Keys</h2>

        {isLoading ? (
          <div className="text-center py-8 text-slate-400">Loading API keys...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-400">{error}</div>
        ) : apiKeys.length === 0 ? (
          <NoAPIKeyYet onCreateClick={handleCreateClick} />
        ) : (
          <APIKeysTable onEdit={handleEditClick} />
        )}
      </div>

      {/* API Documentation */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-6">API Documentation</h2>
        <div className="space-y-8">
          {/* List Workflows */}
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">List Workflows</h3>
            <p className="text-slate-400 text-sm mb-4">Retrieve a list of available workflows, optionally filtered by website.</p>
            <div className="text-xs text-slate-300 mb-2"><strong>GET</strong> https://api.autopilotbrowser.com/wf/search</div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example CURL Request</h4>
                <pre className="bg-slate-900 p-3 rounded text-green-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${listWorkflowsCurl}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Success Response (200)</h4>
                <pre className="bg-slate-900 p-3 rounded text-blue-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${listSuccess}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Error Response (401)</h4>
                <pre className="bg-slate-900 p-3 rounded text-red-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${listError}</code>`}} />
              </div>
            </div>
          </div>

          {/* Run Workflow (Sync) */}
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Run Workflow (Sync)</h3>
            <p className="text-slate-400 text-sm mb-4">Execute a workflow synchronously and wait for completion. The workflowResult object contains the workflow output data.</p>
            <div className="text-xs text-slate-300 mb-2"><strong>POST</strong> https://api.autopilotbrowser.com/wf/run</div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example CURL Request</h4>
                <pre className="bg-slate-900 p-3 rounded text-green-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${syncCurl}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Success Response (200)</h4>
                <pre className="bg-slate-900 p-3 rounded text-blue-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${syncSuccess}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Workflow Run Fail Response (422)</h4>
                <pre className="bg-slate-900 p-3 rounded text-yellow-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${syncFail}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Error Response (400)</h4>
                <pre className="bg-slate-900 p-3 rounded text-red-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${syncError}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Error Response (400) - Browser Offline</h4>
                <pre className="bg-slate-900 p-3 rounded text-red-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${browserOfflineError}</code>`}} />
              </div>
            </div>
          </div>

          {/* Run Workflow (Async) */}
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Run Workflow (Async)</h3>
            <p className="text-slate-400 text-sm mb-4">Execute a workflow asynchronously. Returns immediately with a reference ID for status checking.</p>
            <div className="text-xs text-slate-300 mb-2"><strong>POST</strong> https://api.autopilotbrowser.com/wf/run</div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example CURL Request</h4>
                <pre className="bg-slate-900 p-3 rounded text-green-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${asyncCurl}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Success Response (202)</h4>
                <pre className="bg-slate-900 p-3 rounded text-blue-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${asyncSuccess}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Workflow Run Fail Response (422)</h4>
                <pre className="bg-slate-900 p-3 rounded text-yellow-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${asyncFail}</code>`}} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Example Error Response (429)</h4>
                <pre className="bg-slate-900 p-3 rounded text-red-400 text-xs overflow-x-auto" dangerouslySetInnerHTML={{__html: `<code>${asyncError}</code>`}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <APIKeyDialog isOpen={isDialogOpen} onClose={handleDialogClose} editKey={editKey} />
    </div>
  );
}
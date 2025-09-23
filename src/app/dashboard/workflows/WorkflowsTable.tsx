"use client";
import React, { useState } from "react";
import { useWorkflows } from "@/context/WorkflowsContext";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function WorkflowsTable() {
  const { workflows, isLoading, error } = useWorkflows();
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");

  if (isLoading) {
    return <div className="text-slate-400">Loading workflows...</div>;
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  if (!workflows.length) {
    return <div className="text-slate-400">No workflows found.</div>;
  }

  const visibleWorkflows = workflows.slice(0, visibleCount);
  const hasMore = visibleCount < workflows.length;

  const openInputsDialog = (inputs: unknown) => {
    setDialogTitle("Workflow Inputs");
    let content = inputs;
    if (typeof inputs === 'string') {
      try {
        content = JSON.parse(inputs);
      } catch {
        // If parsing fails, use as is
      }
    }
    setDialogContent(content ? JSON.stringify(content, null, 2) : "{}");
    setDialogOpen(true);
  };

  const openOutputsDialog = (outputs: unknown) => {
    setDialogTitle("Workflow Outputs");
    let content = outputs;
    if (typeof outputs === 'string') {
      try {
        content = JSON.parse(outputs);
      } catch {
        // If parsing fails, use as is
      }
    }
    setDialogContent(content ? JSON.stringify(content, null, 2) : "{}");
    setDialogOpen(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-slate-300">Workflow Name</th>
            <th className="px-4 py-2 text-left text-slate-300">Website</th>
            <th className="px-4 py-2 text-left text-slate-300">Last Run</th>
            <th className="px-4 py-2 text-left text-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleWorkflows.map((workflow) => (
            <tr key={workflow.id} className="border-b border-slate-700">
              <td className="px-4 py-2 text-white font-medium">{workflow.name}</td>
              <td className="px-4 py-2 text-slate-300">{workflow.website}</td>
              <td className="px-4 py-2 text-slate-300">{workflow.last_run_at ? new Date(workflow.last_run_at).toLocaleString() : "Never"}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  className=" text-green-600 hover:bg-green-600 hover:text-white px-2 py-1 rounded text-sm cursor-pointer"
                  onClick={() => openInputsDialog(workflow.inputs)}
                >
                  Inputs
                </button>
                <button
                  className=" text-blue-600 hover:bg-blue-600 hover:text-white px-2 py-1 rounded text-sm cursor-pointer"
                  onClick={() => openOutputsDialog(workflow.outputs)}
                >
                  Outputs
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm cursor-pointer"
                  onClick={() => router.push(`/dashboard/workflows/${workflow.id}/run`)}
                >
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Show More
          </button>
        </div>
      )}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg max-w-2xl w-full">
            <h2 className="text-xl font-bold text-white mb-4">{dialogTitle}</h2>
            <div className="bg-slate-900 p-4 rounded max-h-60 overflow-auto">
              <pre className="text-white whitespace-pre-wrap text-sm">{dialogContent}</pre>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                onClick={() => setDialogOpen(false)}
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

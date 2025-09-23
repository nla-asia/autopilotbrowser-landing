"use client";
import React, { useState } from 'react';

interface Browser {
  id: string;
  browser_name: string;
  device_id: string;
  platform: string;
  last_active_at?: string;
}
import { useBrowsers } from "../../../context/BrowsersContext";

export default function BrowsersTable() {
  const { browsers, isLoading, error, fetchBrowsers } = useBrowsers();
  const PAGE_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBrowser, setSelectedBrowser] = useState<Browser | null>(null);
  const [newName, setNewName] = useState("");

  if (isLoading) {
    return <div className="text-slate-400">Loading browsers...</div>;
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  if (!browsers.length) {
    return <div className="text-slate-400">No browsers found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-slate-300">Name</th>
            <th className="px-4 py-2 text-left text-slate-300">ID</th>
            <th className="px-4 py-2 text-left text-slate-300">Platform</th>
            <th className="px-4 py-2 text-left text-slate-300">Last Active</th>
          </tr>
        </thead>
        <tbody>
          {browsers.slice(0, visibleCount).map((browser: Browser) => (
            <tr key={browser.id} className="border-b border-slate-700">
              <td className="px-4 py-2 text-white font-medium flex items-center gap-2">
                {browser.browser_name}
                <button
                  className="text-slate-400 hover:text-white text-sm p-1 rounded hover:bg-slate-700"
                  onClick={() => {
                    setSelectedBrowser(browser);
                    setNewName(browser.browser_name);
                    setDialogOpen(true);
                  }}
                  title="Edit Browser Name"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </td>
              <td className="px-4 py-2 text-slate-300">{browser.device_id}</td>
              <td className="px-4 py-2 text-slate-300">{browser.platform}</td>
              <td className="px-4 py-2 text-slate-300">{browser.last_active_at ? new Date(browser.last_active_at).toLocaleString() : "Never"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < browsers.length && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Show More
          </button>
        </div>
      )}
      {dialogOpen && selectedBrowser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">Edit Browser Name</h2>
            <div className="mb-4">
              <label className="block text-slate-300 mb-2">Browser Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={async () => {
                  if (!selectedBrowser) return;
                  const updatedBrowser = { ...selectedBrowser, browser_name: newName };
                  try {
                    const response = await fetch('/api/browsers', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(updatedBrowser),
                    });
                    if (response.ok) {
                      setDialogOpen(false);
                      fetchBrowsers();
                    } else {
                      const error = await response.json();
                      alert((error as { error?: string }).error || 'Failed to update browser');
                    }
                  } catch (error) {
                    console.error('Error updating browser:', error);
                    alert('Failed to update browser');
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

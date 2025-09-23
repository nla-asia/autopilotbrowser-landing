"use client";
import React, { useState } from "react";
import { useBrowsers } from "../../../context/BrowsersContext";

export default function BrowsersTable() {
  const { browsers, isLoading, error } = useBrowsers();
  const PAGE_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
            <th className="px-4 py-2 text-left text-slate-300">Browser Name</th>
            <th className="px-4 py-2 text-left text-slate-300">Device ID</th>
            <th className="px-4 py-2 text-left text-slate-300">Platform</th>
            <th className="px-4 py-2 text-left text-slate-300">Last Active</th>
          </tr>
        </thead>
        <tbody>
          {browsers.slice(0, visibleCount).map((browser: any) => (
            <tr key={browser.id} className="border-b border-slate-700">
              <td className="px-4 py-2 text-white font-medium">{browser.browser_name}</td>
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
    </div>
  );
}

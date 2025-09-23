import { useState } from "react";
import { useAPIKeys, APIKey } from "../../../context/APIKeyContext";

interface APIKeysTableProps {
  onEdit: (key: APIKey) => void;
}

export default function APIKeysTable({ onEdit }: APIKeysTableProps) {
  const { apiKeys, isLoading, error } = useAPIKeys();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (apiKey: string, id: number) => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy API key:", err);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8 text-slate-400">Loading API keys...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-400">{error}</div>;
  }

  if (apiKeys.length === 0) {
    return null; // This should be handled by the parent component
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">API Key</th>
            <th scope="col" className="px-6 py-3">Webhook URL</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Created At</th>
          </tr>
        </thead>
        <tbody>
          {apiKeys.map((key) => (
            <tr key={key.id} className="border-b border-slate-700 bg-slate-800/50">
              <td className="px-6 py-4 font-medium text-white">{key.id}</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-slate-300">
                    {key.api_key.substring(0, 20)}...
                  </span>
                  <button
                    onClick={() => handleCopy(key.api_key, key.id)}
                    className="text-slate-400 hover:text-slate-300 transition-colors p-1 rounded hover:bg-slate-700"
                    title="Copy API Key"
                  >
                    {copiedId === key.id ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-300">
                    {key.webhook_url || "N/A"}
                  </span>
                  <button
                    onClick={() => onEdit(key)}
                    className="text-slate-400 hover:text-slate-300 transition-colors p-1 rounded hover:bg-slate-700"
                    title="Edit Webhook Settings"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    key.is_active === 1
                      ? "bg-green-900/50 text-green-400"
                      : "bg-red-900/50 text-red-400"
                  }`}
                >
                  {key.is_active === 1 ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-300">
                {new Date(key.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
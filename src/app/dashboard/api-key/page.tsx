export default function ApiKeyPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">API Key</h1>
          <p className="text-slate-400">Manage your API keys for programmatic access</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          Generate New Key
        </button>
      </div>

      {/* API Keys Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-4">Your API Keys</h2>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-slate-400 text-2xl">🔑</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No API keys yet</h3>
          <p className="text-slate-400 mb-6">
            Generate your first API key to start using the Autopilot Browser API.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Generate Your First API Key
          </button>
        </div>
      </div>

      {/* API Documentation */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-4">API Documentation</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
            <div>
              <h3 className="text-white font-medium">REST API</h3>
              <p className="text-slate-400 text-sm">Programmatic access to browser automation</p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View Docs →
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
            <div>
              <h3 className="text-white font-medium">WebSocket API</h3>
              <p className="text-slate-400 text-sm">Real-time browser control and monitoring</p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View Docs →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

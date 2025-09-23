export default function BrowsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Browsers</h1>
          <p className="text-slate-400">Manage your automated browser instances</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          Create Browser
        </button>
      </div>

      {/* Browsers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Empty State */}
        <div className="col-span-full">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-12 border border-slate-700 text-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-slate-400 text-2xl">🌐</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No browsers yet</h3>
            <p className="text-slate-400 mb-6">
              Create your first automated browser to start building workflows.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Create Your First Browser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


//import { usePathname } from 'next/navigation';

export default function DashboardPage() {
  //const pathname = usePathname();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome to Autopilot Browser</h1>
        <p className="text-slate-300">
          Manage your automated browsing workflows and API integrations from your dashboard.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">Active Browsers</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-xl">🌐</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">Workflows</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-xl">⚡</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">API Calls</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
              <span className="text-purple-400 text-xl">🔑</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg">
            <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
              <span className="text-slate-300 text-sm">AB</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Welcome to Autopilot Browser!</p>
              <p className="text-slate-400 text-sm">Your dashboard is ready. Start creating workflows and managing your browsers.</p>
            </div>
            <span className="text-slate-500 text-sm">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

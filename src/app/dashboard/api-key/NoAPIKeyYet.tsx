interface NoAPIKeyYetProps {
  onCreateClick: () => void;
}

export default function NoAPIKeyYet({ onCreateClick }: NoAPIKeyYetProps) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-slate-400 text-2xl">🔑</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">No API keys yet</h3>
      <p className="text-slate-400 mb-6">
        Generate your first API key to start using the Autopilot Browser API.
      </p>
      <button
        onClick={onCreateClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      >
        Generate Your First API Key
      </button>
    </div>
  );
}
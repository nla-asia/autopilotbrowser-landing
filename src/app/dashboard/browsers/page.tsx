import BrowsersTable from "./BrowsersTable";

export default function BrowsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Browsers</h1>
          <p className="text-slate-400">You can either purchase an Autopilot Browser instance running 24/7 in the cloud from us or install Autopilot Browser locally on your devices.</p>
        </div>
      </div>

      {/* Browsers Table */}
      <BrowsersTable />
    </div>
  );
}

import WorkflowsTable from "./WorkflowsTable";

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Workflows</h1>
          <p className="text-slate-400">Manage automated browsing workflows</p>
        </div>
      </div>

      {/* Workflows Table */}
      <WorkflowsTable />
    </div>
  );
}

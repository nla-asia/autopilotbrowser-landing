import WorkflowsTable from "./WorkflowsTable";

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Workflows</h1>
          <p className="text-slate-400">Workflows are re-usable, eco-friendly web automation solutions backed by intelligent AI agents.</p>
        </div>
      </div>

      {/* Workflows Table */}
      <WorkflowsTable />
    </div>
  );
}

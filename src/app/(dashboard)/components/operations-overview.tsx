import { OperationsOverview } from "./operation-overview";

export function OperationsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-[60%_40%]">
      <div >
        <OperationsOverview />
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-500/30 bg-card p-4">
          AlertsPanel
        </div>

        <div className="rounded-2xl border border-slate-500/30 bg-card p-4">
          RecentActivity
        </div>
      </div>
    </div>
  );
}
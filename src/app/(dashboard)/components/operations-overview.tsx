import { AlertsPanel } from "./alerts-panel";
import { OperationsOverview } from "./operation-overview";
import { RecentActivity } from "./recent-activity";

export function OperationsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-[55%_43%]">
      <div >
        <OperationsOverview />
      </div>

      <div className="min-w-0 h-full flex-col gap-4 overflow-hidden">
        <AlertsPanel />

        <RecentActivity />
      </div>
    </div>
  );
}
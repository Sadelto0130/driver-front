import { AlertsPanel } from "./alerts-panel";
import { OperationsOverview } from "./operation-overview";
import { RecentActivity } from "./recent-activity";

export function OperationsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-[60%_40%]">
      <div >
        <OperationsOverview />
      </div>

      <div className="flex h-full flex-col gap-4">
        <AlertsPanel />

        <RecentActivity />
      </div>
    </div>
  );
}
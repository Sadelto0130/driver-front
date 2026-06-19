import { Driver } from "@/types/driver";
import { DriverProfileTabs } from "./driver-profile";
import { DriverProfileHeader } from "./driver-profile-header";
import { DriverProfileTab } from "@/types/driver";
import { useState } from "react";
import { DriverSummaryTab } from "./driver-summary-tab";
import { DriverActivityTab } from "./driver-activity-tab";

interface Props {
  driver: Driver | null;
}

export function DriverDetailPanel({
  driver,
}: Props) {
  const [activeTab, setActiveTab] = useState<DriverProfileTab>("summary")
  
  if (!driver) {
    return (
      <div className="
        flex
        h-full
        items-center
        justify-center
      ">
        Selecciona un conductor
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-white pt-8 lg:pt-0">
      <DriverProfileHeader driver={driver} />

      <DriverProfileTabs 
        value={activeTab}
        onValueChange={setActiveTab}
      />

      <div className="min-h-0 flex-1 overflow-y-auto p-4 pt-0">

        {activeTab === "summary" && (
          <DriverSummaryTab driver={driver}/>
        )}
       
        {activeTab === "activity" && (
          <DriverActivityTab
            driver={driver}
          />
        )}
       {/**


      {activeTab === "documents" && (
        <DriverDocumentsTab
          driver={driver}
        />
      )}

      {activeTab === "finance" && (
        <DriverFinanceTab
          driver={driver}
        />
      )}

      {activeTab === "audit" && (
        <DriverAuditTab
          driver={driver}
        />
      )}
         * 
         */}
      </div>
    </div>
  );
}
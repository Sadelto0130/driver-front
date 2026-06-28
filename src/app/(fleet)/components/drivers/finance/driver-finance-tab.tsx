import { Driver } from "@/types/driver";
import { DriverFinancialSummarySection } from "./driver-financial-summary";
import { DriverSettlementsSection } from "./driver-settlements";
import { DriverFinancialDetailSection } from "./driver-financial-detail";

interface Props {
  driver: Driver
}

export function DriverFinanceTab({driver}: Props) {
  return (
    <div className="space-y-8 p-4">
      <DriverFinancialSummarySection driver={driver} />

      <DriverSettlementsSection driver={driver}/>

      <DriverFinancialDetailSection driver={driver} />
    </div>
  )
}
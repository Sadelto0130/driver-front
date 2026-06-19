import { EntityListRow } from "@/components/shared/entity-list-row/entity-list-row";
import { Driver } from "@/types/driver";
import { DriverListItemContent } from "./driver-list-item-content";

interface Props {
  driver: Driver
  selected: boolean
  onClick: () => void
}

export function DriverListItem({
  driver,
  selected,
  onClick
}: Props) {
  return (
    <EntityListRow
      selected={selected}
      onClick={onClick}
      desktopContent={
        <DriverListItemContent driver={driver}/>
      }
      mobileContent={
        <DriverListItemContent driver={driver} />
      }
    />
  )
}
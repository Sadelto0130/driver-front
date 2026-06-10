import { WorkQueue } from "../components/work-queue";

export default function DispatchPage() {
  return (
    <div className='flex h-full min-h-0 flex-1 flex-col gap-6'>
      <div className='min-h-0 flex-1 overflow-hidden'>
        <WorkQueue />
      </div>
    </div>
  )
}
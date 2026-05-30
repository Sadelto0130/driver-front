import { WorkQueue } from '@/components/dispatch/work-queue';

export default function DashboardPage() {
  return (
    <div className='flex h-full min-h-0 flex-1 flex-col gap-6'>
      <div className='min-h-0 flex-1'>
        <WorkQueue />
      </div>
    </div>
  )
}
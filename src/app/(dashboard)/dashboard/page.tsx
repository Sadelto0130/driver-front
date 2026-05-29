import { DashboardSection } from '@/components/dashboard/dashboard-section'
import { MetricCard } from '@/components/dashboard/metric-card';
import { PageHeader } from '@/components/dashboard/page-header'
import { WorkQueue } from '@/components/dispatch/work-queue';
import {
  CarFront,
  ClipboardList,
  Users,
  CheckCircle2
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <WorkQueue />
    </div>
  )
  /*return (
    <div className="space-y-10">
      <PageHeader
        title='Panel General'
        description='Resumen operativo en tiempo real de la flota'
      />

      <DashboardSection
        title='Métricas Operativas'
        description='Estado actual de la operacion'
      >
        <div className='grid gap-6 md:grid-cols-2 2xl:grid-cols-4'>
          <MetricCard
            title='Conductores Activos'
            value='25'
            icon={Users}
            trend='+12% esta semana'
          />

          <MetricCard
            title='Viajes Activos'
            value='5'
            icon={CarFront}
            trend='+8% hoy'
          />

          <MetricCard
            title='Asignaciones Pendientes'
            value='4'
            icon={ClipboardList}
          />

          <MetricCard
            title='Viajes Completados'
            value='128'
            icon={CheckCircle2}
            trend='+18% este mes'
          />          
        </div>
      </DashboardSection>
    </div>
  );*/
}
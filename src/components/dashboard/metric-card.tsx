import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: string
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend
}: MetricCardProps) {
  return (
    <div className="
      group relative overflow-hidden
      rounded-3xl
      border border-slate-200/70
      bg-white
      p-6
      shadow-sm
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl hover:shadow-slate-200/60
    ">
      <div className="
        absolute right-0 top-0
        h-32 w-32 rounded-full
        bg-blue-500/5 blur-3xl
        transition-all duration-300
        group-hover:bg-blue-500/10
      "/>

      <div className="relative flex itmes-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>

          {trend && (
            <p className="mt-3 text-sm font-medium text-emerald-600">
              {trend}
            </p>
          )}
        </div>

        <div className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-500
          to-indigo-600
          shadow-lg shadow-blue-500/20
        ">
          <Icon className="h-7 w-7 text-white"/>
        </div>
      </div>
    </div>
  )
}
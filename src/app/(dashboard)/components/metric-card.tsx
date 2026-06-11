import { cn } from "@/lib/utils";
import { MetricCardProps } from "@/types/metrics";

export function MetricCard({
  title,
  icon,
  iconStyle,
  bgStile,
  primaryMetric,
  secondarMetrics
}: MetricCardProps) {
  return (
    <div className="   
      relative 
      overflow-hidden
      rounded-2xl 
      border 
      border-slate-400/80
      bg-card
      p-3 md:p-4
      shadow-[0_8px_24px_rgba(0,0,0,0.05)] 
      transition-all 
      hover:-translate-y-0.5 
      hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
    ">

      <div className={cn(
        "absolute inset-x-0 top-0 h-[3px]",
          bgStile
        )} />

      <div className="mb-3 flex items-center gap-2">
        
        <div className={cn(`
            flex 
            h-9 w-9 md:h-10 md:w-10 
            items-center 
            justify-center 
            rounded-xl 
            ring-1 
            shadow-sm
          `, iconStyle)}>
          {icon}
        </div>

        <h3 className="font-semibold">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            {primaryMetric.value}
          </p>

          <p className="text-xs text-muted-foreground">
            {primaryMetric.label}
          </p>
        </div>

        <div className="space-y-1.5 border-t 2">
          {secondarMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">
                {metric.label}
              </span>

              <span className="font-medium">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
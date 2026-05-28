import { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  action?: ReactNode
}

export function PageHeader({
  title,
  description,
  action
}: PageHeaderProps) {
  return (     
    <div className="
      flex flex-col gap-6
      lg:flex-row lg:items-center lg:justify-between
    ">
      <div>
        <h1 className="
          text-3xl font-bold tracking-tight
          text-slate-900
          lg:text-4xl
        ">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-base text-slate-500">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  )
}
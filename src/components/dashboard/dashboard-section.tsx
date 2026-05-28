import { ReactNode } from "react"

interface DashboardSectionsProps {
  title: string
  description?: string
  children: ReactNode
}

export function DashboardSection({
  title,
  description,
  children
}: DashboardSectionsProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 ext-sm text-slate-500">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  )
}
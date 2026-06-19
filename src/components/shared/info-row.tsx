interface Props {
  label: string
  value: React.ReactNode
}

export function InfoRow({
  label,
  value
}: Props) {
  return (
    <div className="flex items-center justify-items-start gap-4 border-b border-slate-100 pb-1">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <div className="text-right text-sm font-medium text-slate-900">
        {value}
      </div>
    </div>
  )
}
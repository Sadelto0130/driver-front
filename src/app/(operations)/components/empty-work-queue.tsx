interface Props {
  title: string
  description: string
}

export function EmptyWorkQueue({
  title,
  description
}: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-s text-sm text-slate-500">
        {description}
      </p>
    </div>
  )
}
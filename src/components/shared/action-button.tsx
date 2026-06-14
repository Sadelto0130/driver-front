import { cn } from "@/lib/utils"

interface ActionButtonProps {
  icon: React.ReactNode
  label?: string
  danger?: boolean
  onClick: () => void
}

export function ActionButton({
  icon,
  label,
  danger,
  onClick
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
        pt-2
        group
        flex
        flex-col
        items-center
        justify-center

        bg-transparent
        border-none
        shadow-none

        `,
      )}
      >
      <div
        className={cn(` 
          flex
          h-10
          w-10
          items-center
          justify-center
          
          rounded-xl
          bg-white
          
          shadow-sm
          
          transition-transform
          duration-200
          
          group-hover:scale-110

    
          hover:-translate-y-1
          hover:shadow-lg
    
          active:translate-y-0
          active:scale-95
          
          cursor-pointer
          `,
          danger
            ? `
              border-red-200
              text-red-600
              hover:bg-red-50
              hover:border-red-300
            `
            : `
              border-slate-200
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
            `
      )}
      >
        {icon}
      </div>

      {label ?? <span className="text-xs font-medium">
        {label}
      </span>}
    </button>
  )
}
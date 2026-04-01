import React from 'react'
import { cn } from '@/lib/utils'

const variants = {
  default: 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
}

export const Button = React.forwardRef(function Button(
  { className, variant = 'default', type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-2xl border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:pointer-events-none disabled:opacity-50',
        variants[variant] || variants.default,
        className,
      )}
      {...props}
    />
  )
})

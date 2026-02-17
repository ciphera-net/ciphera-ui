import type { HTMLAttributes } from 'react'
import { cn } from './Button'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size: sm (1rem), md (1.5rem), lg (2rem) */
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-4',
}

/**
 * Brand-styled loading spinner. Uses brand-orange accent.
 */
export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'animate-spin rounded-full border-neutral-200 border-t-brand-orange dark:border-neutral-800 dark:border-t-brand-orange',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}

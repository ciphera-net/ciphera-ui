import type { SVGProps } from 'react'

/* * Swiss flag icon – official proportions (cross 1/6 height). Uses real Swiss federal red. */
const SWISS_RED = '#E41E26'

const SwissFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`shrink-0 ${className ?? ''}`.trim()}
      {...rest}
    >
      <rect width="24" height="24" rx="3" fill={SWISS_RED} />
      <rect x="10" y="0" width="4" height="24" fill="#FFF" />
      <rect x="0" y="10" width="24" height="4" fill="#FFF" />
    </svg>
  )
}

export default SwissFlagIcon

'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { usePageTransition } from './page-transition-provider'

interface TransitionLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const { startLoading } = usePageTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startLoading()
    // Let the link navigate normally
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  )
}

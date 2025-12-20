'use client'

import React, { ReactNode } from 'react'
import { NavigationTransition } from './navigation-transition'
import { PageTransition } from './page-transition'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationTransition />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  )
}

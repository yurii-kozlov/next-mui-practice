'use client'

import { FC, ReactElement, ReactNode } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {
  return (
    <AppRouterCacheProvider>
      {children}
    </AppRouterCacheProvider>
  )
}

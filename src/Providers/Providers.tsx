'use client'

import { FC, ReactElement, ReactNode } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@mui/material";
import theme from "@/themes/light-theme";

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

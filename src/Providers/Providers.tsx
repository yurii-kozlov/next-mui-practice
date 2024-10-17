'use client'

import { FC, ReactElement, ReactNode } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@mui/material";
import { NotesContext } from "@/contexts/NotesContext";
import theme from "@/themes/light-theme";
import NotesStore from "@/store";
const notesStore = new NotesStore()

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <NotesContext.Provider value={notesStore}>
          {children}
        </NotesContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

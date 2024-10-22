'use client'

import { ListItemButton, styled } from "@mui/material";



export const StyledListItemButton = styled(ListItemButton, {
  name: 'ListItemButton',
  shouldForwardProp: (prop) => prop !== 'isRouteActive',
})<{ isRouteActive: boolean }>(({ theme, isRouteActive }) => ({
  '&:hover': {
    background: theme.palette.neutral.tones[80],
  },
  ...(isRouteActive && {
    background: theme.palette.neutral.tones[90]
  }),
}))

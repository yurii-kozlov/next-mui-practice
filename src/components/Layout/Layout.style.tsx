'use client'

import { styled, drawerClasses as MuiDrawerClasses } from "@mui/material";
import Drawer from "@mui/material/Drawer";

export const StyledWrapper = styled('div', {
  name: 'Wrapper'
})(({ theme }) => ({
  backgroundColor: '#F9F9F9',
  width: '100%',
  display: 'flex',
  gap: theme.spacing(5)
}));

export const StyledDrawer = styled(Drawer, {
  name: 'Drawer'
})(() => ({
  [`& .${MuiDrawerClasses.paper}, &.${MuiDrawerClasses.docked}`]: {
    width: 240,
    boxSizing: 'border-box',
  },
}));

export const StyledChildrenWrapper = styled('div', {
  name: 'ChildrenWrapper'
})(() => ({
  width: '100%'
}))

'use client';

import {
  styled,
  drawerClasses as MuiDrawerClasses,
  Typography,
  AppBar,
  Toolbar,
  toolbarClasses as MuiToolbarClasses,
} from "@mui/material";
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

export const StyledTitle = styled(Typography, {
  name: 'Title'
})(({ theme }) =>({
  padding: theme.spacing(8)
}));

export const StyledAppBar = styled(AppBar, {
  name: 'AppBar'
})(({ theme }) => ({
  width: `calc(100% - 240px)`,
  backgroundColor: theme.palette.info.dark
}));

export const StyledOffset = styled('div', {
  name: 'Offset'
})(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: theme.spacing(8)
}))

export const StyledToolbar = styled(Toolbar, {
  name: 'Toolbar'
})(({ theme }) => ({
  [`&.${MuiToolbarClasses.root}`]: {
    padding: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12),
    },

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
    },
  }
}))

export const StyledDate = styled(Typography, {
  name: 'Date',
})(() => ({
  flexGrow: 1,
}))

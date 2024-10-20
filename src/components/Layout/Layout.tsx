'use client'
import React, { FC, ReactNode } from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'
import { StyledWrapper, StyledDrawer, StyledChildrenWrapper } from './Layout.style';

interface LayoutProps {
  children: ReactNode
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledDrawer
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5">
            Ninja Notes
          </Typography>
        </div>
      </StyledDrawer>

      <StyledChildrenWrapper>
        {children}
      </StyledChildrenWrapper>
    </StyledWrapper>
  )
}
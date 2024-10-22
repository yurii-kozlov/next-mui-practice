import React, { FC, ReactNode } from 'react'
import Typography from '@mui/material/Typography';
import { DrawerMenuItems } from '../DrawerMenuItems';
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
        <DrawerMenuItems />
      </StyledDrawer>

      <StyledChildrenWrapper>
        {children}
      </StyledChildrenWrapper>
    </StyledWrapper>
  )
}
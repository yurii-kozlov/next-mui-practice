import React, { FC, ReactNode } from 'react'
import { DrawerMenuItems } from '../DrawerMenuItems';
import { StyledWrapper, StyledDrawer, StyledChildrenWrapper, StyledTitle } from './Layout.style';

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
          <StyledTitle variant="h5">
            Ninja Notes
          </StyledTitle>
        </div>
        <DrawerMenuItems />
      </StyledDrawer>

      <StyledChildrenWrapper>
        {children}
      </StyledChildrenWrapper>
    </StyledWrapper>
  )
}
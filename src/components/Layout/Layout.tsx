import React, { FC, ReactNode } from 'react'
import { DrawerMenuItems } from '../DrawerMenuItems';
import { 
  StyledWrapper, 
  StyledDrawer, 
  StyledChildrenWrapper, 
  StyledTitle, 
  StyledAppBar,
  StyledOffset,
  StyledToolbar,
  StyledDate
} from './Layout.style';
import { Typography } from '@mui/material';
import { format } from 'date-fns';

interface LayoutProps {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <StyledDate>Today is the {format(new Date(), 'do MMMM Y')}</StyledDate>
          <Typography>Mario</Typography>
        </StyledToolbar>
      </StyledAppBar>
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
        <StyledOffset />
        {children}
      </StyledChildrenWrapper>
    </StyledWrapper>
  )
}
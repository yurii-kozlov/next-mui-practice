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
  StyledDate,
  StyledName
} from './Layout.style';
import { Avatar } from '@mui/material';
import { format } from 'date-fns';
import MarioImage from '@/images/mario.png';

interface LayoutProps {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <StyledDate>Today is the {format(new Date(), 'do MMMM Y')}</StyledDate>
          <StyledName variant="h6">Mario</StyledName>
          <Avatar src={MarioImage.src}/>
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

'use client';

import { Badge, styled, badgeClasses as MuiBadgeClasses } from "@mui/material";

export const StyledBadge = styled(Badge, {
  name: 'Badge'
})(() => ({
  [`& .${MuiBadgeClasses.badge}`]: {
    color: 'white'
  }
}));

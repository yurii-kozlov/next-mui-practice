import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card, {
  name: 'Card',
  shouldForwardProp: prop => prop !== 'isWorkCategory'
})<{isWorkCategory: boolean}>(({ isWorkCategory }) => ({
  ...(isWorkCategory && {
    border: '1px solid red'
  })
}));

'use client';

import { ImageList, styled } from "@mui/material";

export const StyledImagesList = styled(ImageList, {
  name: 'ImagesList',
})(() => ({
  width: 500,
  height: 450
}));

export const StyledWrapper = styled('div', {
  name: 'Wrapper'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(15)
}));

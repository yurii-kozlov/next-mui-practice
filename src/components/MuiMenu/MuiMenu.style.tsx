import { MenuItem, styled } from "@mui/material";

export const StyledMenuItem = styled(MenuItem, {
  name: 'MenuItem'
})(({ theme }) => ({

  '&:hover': {
    backgroundColor: theme.palette.neutral.tones[50]
  },

}))
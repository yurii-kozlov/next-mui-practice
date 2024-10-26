import { FormControl, MenuItem, styled } from "@mui/material";

export const StyledFormControl = styled(FormControl, {
  name: 'FormControl'
})(() => ({
  width: '50%'
}));

export const StyledMenuItem = styled(MenuItem, {
  name: 'MenuItem'
})(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.grey[300]
  }
}));

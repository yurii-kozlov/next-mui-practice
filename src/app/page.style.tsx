import { Button, styled, Typography } from "@mui/material";

export const StyledSubmitButton = styled(Button, {
  name: 'SubmitButton'
})(() => ({
  fontSize: 60,
  backgroundColor: 'violet',
  '&:hover': {
    backgroundColor: 'blue'
  }
}));

export const StyledTitle = styled(Typography, {
  name: 'Title'
})(({ theme }) =>({
  textDecoration: 'underline',
  marginBottom: theme.spacing(3)
}))

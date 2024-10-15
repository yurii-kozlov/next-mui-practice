import { Button, styled, Typography } from "@mui/material";

export const StyledSubmitButton = styled(Button, {
  name: 'SubmitButton'
})(({ theme }) => ({
  fontSize: 60,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
}));

export const StyledTitle = styled(Typography, {
  name: 'Title'
})(({ theme }) =>({
  textDecoration: 'underline',
  marginBottom: theme.spacing(4)
}))

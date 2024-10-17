import { Button, styled, TextField, Typography, textFieldClasses, FormControl } from "@mui/material";

export const StyledSubmitButton = styled(Button, {
  name: 'SubmitButton'
})(({ theme }) => ({
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
}));

export const StyledTextfield = styled(TextField, {
  name: 'Textfield'
})(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),

  [`&.${textFieldClasses.root}`]: {
    display: 'block',
  },
}));

export const StyledFormControl = styled(FormControl, {
  name: 'FormControl'
})(({ theme}) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  display: 'block'
}))

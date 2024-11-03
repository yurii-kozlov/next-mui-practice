import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion, {
  name: 'Accordion',
})(({ theme }) => ({
  padding: theme.spacing(5),
  width: '70%'
}));

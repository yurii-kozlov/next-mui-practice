'use client';

import { Alert, AlertTitle, Stack, Button } from "@mui/material";
import { Check } from "@mui/icons-material";

export const MuiAlert = () => {
  return (
    <Stack spacing={10}>
      <Alert severity="error"> This is error alert</Alert>
      <Alert severity="warning"> This is warning alert</Alert>
      <Alert severity="info"> This is info alert</Alert>
      <Alert severity="success"> This is success alert</Alert>

      <Alert variant="outlined" severity="error"> This is error alert</Alert>
      <Alert variant="outlined" severity="warning"> This is warning alert</Alert>
      <Alert variant="outlined" severity="info"> This is info alert</Alert>
      <Alert variant="outlined" severity="success"> This is success alert</Alert>

      <Alert variant="filled" severity="error" onClose={() => alert('close')}>
        <AlertTitle>Error</AlertTitle>
        This is error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is info alert
      </Alert>
      <Alert 
        variant="filled" 
        severity="success" 
        icon={<Check fontSize="inherit"/>}
        action={<Button color="inherit" size="small">Undo</Button>}
      >
        <AlertTitle>Success</AlertTitle>
        This is success alert
      </Alert>
    </Stack>
  );
};

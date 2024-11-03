"use client";

import { Alert, Button, Snackbar } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export const MuiSnackbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        Submit
      </Button>
      <Snackbar
        // message="Form submitted successfully!"
        autoHideDuration={4000}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

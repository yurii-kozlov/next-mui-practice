'use client';

import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from "@mui/material";
import { useState } from "react";

export const MuiDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)} variant="contained">Open dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={isDialogOpen}
      >
        <DialogTitle>Submit the tes?</DialogTitle>
        <DialogContent id="dialog-description">
          <DialogContentText>
            Are you sure you want to submit the test? You will not be able
            to edit after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button autoFocus variant="outlined" onClick={() => setIsDialogOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
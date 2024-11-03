
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { Save } from '@mui/icons-material';

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={6} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">Submit</LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">Submit</LoadingButton>
      <LoadingButton loadingPosition='start' startIcon={<Save />} variant="outlined">Submit</LoadingButton>
      <LoadingButton loadingPosition='start' startIcon={<Save />} variant="outlined" loading>Submit</LoadingButton>
    </Stack>
  );
};
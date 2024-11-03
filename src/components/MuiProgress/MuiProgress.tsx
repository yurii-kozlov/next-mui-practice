import { CircularProgress, Stack, LinearProgress } from '@mui/material';

export const MuiProgress = () => {
  return (
    <Stack spacing={10}>
      <CircularProgress/>
      <CircularProgress color="success"/>
      <CircularProgress variant="determinate" value={60}/>

      <LinearProgress/>
      <LinearProgress color="success"/>
      <LinearProgress variant="determinate" value={60}/>
    </Stack>
  );
};

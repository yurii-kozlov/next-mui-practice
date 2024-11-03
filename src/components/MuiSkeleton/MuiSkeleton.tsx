import { Skeleton, Stack } from "@mui/material";

export const MuiSkeleton = () => {
  return (
    <Stack spacing={3} width="250px">
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton variant="rectangular" width={250} height={125} animation="wave"/>
      <Skeleton variant="text"/>
    </Stack>
  );
};
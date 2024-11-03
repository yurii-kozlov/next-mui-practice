import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MuiTooltip = () => {
  return (
    <Stack direction="row" spacing={10}>
      <Tooltip title="You hovered!" arrow enterDelay={500} leaveDelay={200}>
        <Typography variant="body1">Hover here please</Typography>
      </Tooltip>
      <Tooltip title="Delete" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

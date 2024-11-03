import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import { StyledBadge } from "./MuiBadge.style";

export const MuiBadge = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={20} justifyContent=" center">
      <Badge badgeContent={5} color="success">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="success">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="success" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={111} color="success">
        <Mail />
      </Badge>
      <StyledBadge badgeContent={111} color="success" max={999}>
        <Mail />
      </StyledBadge>
      <Badge variant="dot" color="success" max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="success" max={999} invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

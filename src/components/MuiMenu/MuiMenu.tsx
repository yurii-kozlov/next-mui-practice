'use client';

import { Box, Button, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { StyledMenuItem } from "./MuiMenu.style";

export const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Button
        aria-controls={open ? 'resources-menu' : undefined}
        aria-haspopup
        aria-expanded={open ? true : undefined}
        id="resources-button" 
        variant="contained" 
        color="primary" 
        onClick={handleClick}
        size="large"
        endIcon={<KeyboardArrowDown />}
      >
        Resources
      </Button>
      <Menu 
        id="resources-menu" 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        anchorEl={anchorEl} 
        open={open}
        MenuListProps={{
          'aria-labelledby': 'resources-button'
        }}
        onClose={handleClose}
        onChange={(value) => console.log(value)}
      >
        <StyledMenuItem selected onClick={handleClose}>Blog</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Podcact</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Games</StyledMenuItem>
      </Menu>
    </Box>
  );
};

"use client";

import Link from "next/link";
import { ListItemIcon, ListItemText } from "@mui/material";
import { StyledListItemButton } from "./DrawerMenuItem.styles";
import { MenuItem } from "@/types/MenuItem";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface DrawerMenuItemProps {
  menuItem: MenuItem
}

export const DrawerMenuItem: FC<DrawerMenuItemProps> = ({ menuItem }) => {
  const pathname = usePathname();

  const { text, path, icon } = menuItem;
  const isRouteActive = pathname === path;

  return (
    <StyledListItemButton key={text} LinkComponent={Link} href={path} isRouteActive={isRouteActive}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </StyledListItemButton>
  );
};

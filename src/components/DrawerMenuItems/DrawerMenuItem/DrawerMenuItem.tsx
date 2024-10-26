"use client";

import { ListItemIcon, ListItemText } from "@mui/material";
import { StyledListItemButton } from "./DrawerMenuItem.styles";
import { MenuItem } from "@/types/MenuItem";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

interface DrawerMenuItemProps {
  menuItem: MenuItem
}

export const DrawerMenuItem: FC<DrawerMenuItemProps> = ({ menuItem }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { text, path, icon } = menuItem;
  const isRouteActive = pathname === path;

  return (
    <StyledListItemButton onClick={() => router.push(path)} key={text} isRouteActive={isRouteActive}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </StyledListItemButton>
  );
};

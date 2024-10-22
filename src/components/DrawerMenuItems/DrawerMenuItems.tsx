import { List } from "@mui/material";
import { DRAWER_MENU_ITEMS } from "@/constants";
import { DrawerMenuItem } from "./DrawerMenuItem";

export const DrawerMenuItems = () => {

  return (
    <List>
      {DRAWER_MENU_ITEMS.map((item) => (
          <DrawerMenuItem key={item.text} menuItem={item}/>
        ))}
    </List>
  );
};

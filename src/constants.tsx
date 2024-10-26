import { AddAlarmOutlined, AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

export const ROUTES = {
  HOME: '/',
  NOTES: '/notes'
};

export const DRAWER_MENU_ITEMS = [
  {
    text: 'My notes',
    icon: <SubjectOutlined color="secondary"/>,
    path: '/notes'
  },
  {
    text: 'Create note',
    icon: <AddCircleOutlineOutlined color="secondary"/>,
    path: '/create'
  },
  {
    text: 'Other MUI Components',
    icon: <AddAlarmOutlined />,
    path: '/mui-components',
  }
];

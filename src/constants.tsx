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

export const IMAGES = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export const TABLE_DATA = [{
  "id": 1,
  "first_name": "Roana",
  "last_name": "Bromilow",
  "email": "rbromilow0@geocities.jp",
  "gender": "Female",
  "ip_address": "106.156.40.25"
}, {
  "id": 2,
  "first_name": "Phillip",
  "last_name": "Caville",
  "email": "pcaville1@latimes.com",
  "gender": "Male",
  "ip_address": "186.92.218.61"
}, {
  "id": 3,
  "first_name": "Lorry",
  "last_name": "Deinhard",
  "email": "ldeinhard2@cpanel.net",
  "gender": "Male",
  "ip_address": "208.64.219.58"
}, {
  "id": 4,
  "first_name": "Maureen",
  "last_name": "Huyche",
  "email": "mhuyche3@un.org",
  "gender": "Female",
  "ip_address": "126.125.90.234"
}, {
  "id": 5,
  "first_name": "Jacquelyn",
  "last_name": "Rome",
  "email": "jrome4@uol.com.br",
  "gender": "Female",
  "ip_address": "234.117.170.69"
}, {
  "id": 6,
  "first_name": "Sherwood",
  "last_name": "Deeves",
  "email": "sdeeves5@skyrock.com",
  "gender": "Non-binary",
  "ip_address": "153.143.157.235"
}, {
  "id": 7,
  "first_name": "Pavel",
  "last_name": "Towe",
  "email": "ptowe6@ustream.tv",
  "gender": "Male",
  "ip_address": "244.46.7.87"
}, {
  "id": 8,
  "first_name": "Tobias",
  "last_name": "Weller",
  "email": "tweller7@ftc.gov",
  "gender": "Male",
  "ip_address": "239.177.245.91"
}, {
  "id": 9,
  "first_name": "Raddie",
  "last_name": "Hellens",
  "email": "rhellens8@cocolog-nifty.com",
  "gender": "Male",
  "ip_address": "37.207.137.147"
}, {
  "id": 10,
  "first_name": "Matias",
  "last_name": "Ledstone",
  "email": "mledstone9@gizmodo.com",
  "gender": "Male",
  "ip_address": "234.102.134.66"
}]


import { createTheme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'
import { customPalette } from './color-palette'

import { openSans, gothamNarrowBlack } from '@/fonts'

const appName = process.env.NEXT_PUBLIC_APP_NAME;

const storePalette = customPalette['davidclulow']
const {
  wildSand,
  white,
  cyprus,
  alto,
  boulder,
  halfBaked,
  sherpaBlue,
  jaggedIce,
  tulipTree,
  thunderBird,
  greenPea,
  black,
  grey,
} = storePalette

import { error, info, neutral, primary, secondary, success, warning } from './colours'

// https://mui.com/material-ui/customization/breakpoints/
const breakpoints = createBreakpoints({
  values: {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
})

export const themeProps = {
  themeName: appName,
  name: appName,
  fontFamily: `${openSans.style.fontFamily}, sans-serif`,
  // https://mui.com/material-ui/customization/typography/
  typography: {
    fontFamily: `${openSans.style.fontFamily}, sans-serif`,

    fontWeightRegular: 400,
    fontSize: 14, // 14 = 1rem (16px)
    h1: {
      fontFamily: `${gothamNarrowBlack.style.fontFamily}, sans-serif`,
      textTransform: 'uppercase',
      fontSize: 32, // this is a change requested by the design team (Alice)
      fontWeight: 450,
      lineHeight: 1.1,

      [breakpoints.up('lg')]: {
        fontSize: 56,
      },
    },
    h2: {
      fontFamily: `${gothamNarrowBlack.style.fontFamily}, sans-serif`,

      fontFamily: `${gothamNarrowBlack.style.fontFamily}, sans-serif`,
      textTransform: 'uppercase',
      fontSize: 44,
      fontWeight: 450,
      lineHeight: 1.1,

      [breakpoints.up('lg')]: {
        fontSize: 48,
      },
    },
    h3: {
      fontFamily: `${gothamNarrowBlack.style.fontFamily}, sans-serif`,
      textTransform: 'uppercase',
      fontSize: 32,
      fontWeight: 450,
      lineHeight: 1.1,

      [breakpoints.up('lg')]: {
        fontSize: 36,
      },
    },
    h4: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 32,
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 28,
      },
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 24,
      },
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.75,

      [breakpoints.up('lg')]: {
        fontSize: 20,
      },
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.75,

      [breakpoints.up('lg')]: {
        fontSize: 16,
      },
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 16,
      },
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 14,
      },
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'none',
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 16,
      },
    },
    caption: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up('lg')]: {
        fontSize: 12,
      },
    },
  },
  // https://mui.com/material-ui/customization/palette/
  palette: {
    primary: {
      main: primary['default'],
      light: primary[40],
      tones: {
        0: primary[0],
        10: primary[10],
        20: primary[20],
        30: primary[30],
        40: primary[40],
        50: primary[50],
        60: primary[60],
        70: primary[70],
        80: primary[80],
        90: primary[90],
        95: primary[95],
        99: primary[99],
        100: primary[100],
      },
    },
    secondary: {
      main: secondary['default'],
      light: secondary[40],
      tones: {
        0: secondary[0],
        10: secondary[10],
        20: secondary[20],
        30: secondary[30],
        40: secondary[40],
        50: secondary[50],
        60: secondary[60],
        70: secondary[70],
        80: secondary[80],
        90: secondary[90],
        95: secondary[95],
        99: secondary[99],
        100: secondary[100],
      },
    },
    error: {
      main: error['default'],
      light: error[40],
      tones: {
        0: error[0],
        10: error[10],
        20: error[20],
        30: error[30],
        40: error[40],
        50: error[50],
        60: error[60],
        70: error[70],
        80: error[80],
        90: error[90],
        95: error[95],
        99: error[99],
        100: error[100],
      },
    },
    warning: {
      main: warning['default'],
      light: warning[40],
      tones: {
        0: warning[0],
        10: warning[10],
        20: warning[20],
        30: warning[30],
        40: warning[40],
        50: warning[50],
        60: warning[60],
        70: warning[70],
        80: warning[80],
        90: warning[90],
        95: warning[95],
        99: warning[99],
        100: warning[100],
      },
    },
    info: {
      main: info['default'],
      light: info[40],
      tones: {
        0: info[0],
        10: info[10],
        20: info[20],
        30: info[30],
        40: info[40],
        50: info[50],
        60: info[60],
        70: info[70],
        80: info[80],
        90: info[90],
        95: info[95],
        99: info[99],
        100: info[100],
      },
    },
    success: {
      main: success['default'],
      light: success[40],
      tones: {
        0: success[0],
        10: success[10],
        20: success[20],
        30: success[30],
        40: success[40],
        50: success[50],
        60: success[60],
        70: success[70],
        80: success[80],
        90: success[90],
        95: success[95],
        99: success[99],
        100: success[100],
      },
    },
    neutral: {
      main: neutral['default'],
      light: neutral[40],
      tones: {
        0: neutral[0],
        10: neutral[10],
        20: neutral[20],
        30: neutral[30],
        40: neutral[40],
        50: neutral[50],
        60: neutral[60],
        70: neutral[70],
        80: neutral[80],
        90: neutral[90],
        95: neutral[95],
        98: neutral[98],
        99: neutral[99],
        100: neutral[100],
      },
    },
    divider: neutral[80],
    outline: neutral[60],
    background: {
      default: neutral[99],
      1: neutral[98],
      2: neutral[95],
      3: neutral[90],
      4: neutral[80],
      5: primary[90],
      6: success[90],
      7: secondary[90],
      8: error[90],
      9: warning[90],
      10: info[90],
      11: neutral[40],
      100: neutral[100],
      primary: primary['default'],
      secondary: secondary['default'],
      success: success['default'],
      error: error['default'],
      neutral: neutral['default'],
      //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
      dark: {
        primary: cyprus,
        secondary: halfBaked,
        tertiary: sherpaBlue,
        quaternary: jaggedIce,
      },
      light: {
        primary: white,
        secondary: wildSand,
        tertiary: alto,
        quaternary: boulder,
      },
    },
    //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
    color: {
      success: greenPea,
      warning: tulipTree,
      error: thunderBird,
      black: black,
      grey: grey,
    },
    //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
    action: {
      hover: cyprus,
    },
    //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
    custom: storePalette,
    text: {
      primary: neutral['default'],
      //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
      dark: {
        primary: cyprus,
        secondary: halfBaked,
        tertiary: sherpaBlue,
        quaternary: jaggedIce,
      },
      light: {
        primary: white,
        secondary: boulder,
        tertiary: alto,
        quaternary: wildSand,
      },
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
  spacing: 2,
  breakpoints,
  shape: {
    borderRadius: 8,
    pillRadius: 30,
  },
  shadows: [
    'none',
    'inset 0px 1.47273px 11.7818px rgba(96, 97, 112, 0.32)',
    '0px 0px 2.94545px rgba(40, 41, 61, 0.08), 0px 1.47273px 5.89091px rgba(96, 97, 112, 0.16)',
    '0px 0px 2.94545px rgba(40, 41, 61, 0.04), 0px 5.89091px 11.7818px rgba(96, 97, 112, 0.16)',
    '0px 0px 5.89091px rgba(40, 41, 61, 0.04), 0px 11.7818px 23.5636px rgba(96, 97, 112, 0.16)',
    '0px 5.89091px 11.7818px rgba(40, 41, 61, 0.04), 0px 23.5636px 47.1273px rgba(96, 97, 112, 0.16)',
    '0px 5.89091px 23.5636px rgba(40, 41, 61, 0.04), 0px 47.1273px 70.6909px rgba(96, 97, 112, 0.16)',
    '0px 5.89091px 23.5636px rgba(40, 41, 61, 0.08), 0px 58.9091px 94.2545px rgba(96, 97, 112, 0.24)',
    '0px 0px 5.89091px rgba(0, 0, 0, 0.04), 0px 11.7818px 23.5636px rgba(0, 0, 0, 0.16)',
    '0px -5.889999866485596px 11.781817436218262px 0px rgba(96, 97, 112, 0.16), 0px 0px 2.9454543590545654px 0px rgba(40, 41, 61, 0.04)',
    '0px 5.9px 11.8px 0px rgba(96, 97, 112, 0.1), 0 0 2.9px 0px rgba(40, 41, 61, 0.04)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
  button: {
    backgroundColor: cyprus,
    '&:hover': {
      backgroundColor: cyprus,
    },
  },
  //  TODO: Legacy can be removed once all components have been migrated to the VD colour palette
  child: {
    backgroundColor: cyprus,
  },
  // https://mui.com/material-ui/customization/theme-components/
}

const theme = createTheme(themeProps)
export default theme

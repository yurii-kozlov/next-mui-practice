import '@mui/material/styles/createPalette'
declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    11: string
    primary?: string
    secondary?: string
    error?: string
    success?: string
    neutral?: string
  }

  export interface PaletteColor {
    light: string
    main: string
    tones: {
      0: string
      10: string
      20: string
      30: string
      40: string
      50: string
      60: string
      70: string
      80: string
      90: string
      95: string
      98?: string
      99?: string
      100: string
    }
  }

  interface Palette {
    neutral: PaletteColor
    outline: string
  }
  interface PaletteOptions {
    neutral: PaletteColorOptions
    outline: string
  }
}

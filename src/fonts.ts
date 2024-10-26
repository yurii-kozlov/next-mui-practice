import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
  variable: '--open-sans',
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['OpenSansFallback'],
  adjustFontFallback: false,
})

export const gothamNarrowBlack = localFont({
  src: [
    {
      path: '../public/fonts/GothamNarrow-Black.woff2',
      weight: '450',
      style: 'normal',
    },
  ],
  variable: '--gotham-narrow-black',
  fallback: ['GothamNarrowBlackFallback'],
  adjustFontFallback: false,
})

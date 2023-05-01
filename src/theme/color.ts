import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch'
import { selectTheme } from './select'

// const sizes = {
//   sizes: {
    
//     max: 'max-content',
//     min: 'min-content',
//     full: '100%',
//     '3xs': '14rem',
//     '2xs': '16rem',
//     xs: '20rem',
//     sm: '24rem',
//     md: '28rem',
//     lg: '32rem',
//     xl: '36rem',
//     '2xl': '41.625rem',
//     '3xl': '48rem',
//     '4xl': '56rem',
//     '5xl': '64rem',
//     '6xl': '72rem',
//     '7xl': '80rem',
//     '8xl': '90rem',
//     container: {
//       sm: '661px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',

//     },
//   },
// }





// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primary: {
      main: '#070529',
      50: '#DCDBEA',
      100: '#F9C567',
      200: '#16134f',
      300: '#F9C567',
      400: '#ABA7A7',
      500: '#070529'
    },
    text: {
      50: '#595956',
      100: '#ABA7A7',
      200: '#1F1F1F',
      300: '#AAAAAA'
    },
    bg: {
      100: '#D9D9D9'
    },
  },

  components: { Switch: switchTheme, Select: selectTheme }
})

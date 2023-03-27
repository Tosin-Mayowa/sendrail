import { extendTheme } from '@chakra-ui/react';
import { modalTheme } from './modal'
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primary: {
      main: '#070529',
      100: '#F9C567',
      500: '#070529'
    }
  },
  components: { Modal: modalTheme }
})

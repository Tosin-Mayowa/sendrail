import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch'
import { selectTheme } from './select'

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
      300: '#AAAAAA',
    }
  },
  components: { Switch: switchTheme, Select: selectTheme }
})

import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys
)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: 'white'
  },
  track: {
    bg: 'primary.50',
    _checked: {
      bg: 'primary.main'
    }
  }
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })

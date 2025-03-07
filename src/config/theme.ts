// import '@fontsource-variable/outfit';
import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      500: "#1a202c",
      900: "#1a202c",
    },
  },
  components: {
    fonts: {
      heading: 'Outfit, sans-serif',
      body: 'Outfit, sans-serif',
    },
    Text: {
      variants: {
        sm: {
          fontSize: '10px',
          color: '#1C274C'
        }
      }
    },
    Form: {
      variants: {
        custom: {
        }  
      }
    },
    Button: {
      variants: {
        primary: {
          bg: '#FFCB00',
          borderRadius: '10rem',
          color: 'white',
          _hover: {
            opacity: 0.8,
          }
        }
      }
    },
    Link: {
      variants: {
        primary: {
          color: '#FFCB00',
        }
      }
    },
    // Button: {
    //   // 1. We can update the base styles
    //   baseStyle: {
    //     fontWeight: 'bold', // Normally, it is "semibold"
    //   },
    //   // 2. We can add a new button size or extend existing
    //   sizes: {
    //     xl: {
    //       h: '56px',
    //       fontSize: 'lg',
    //       px: '32px',
    //     },
    //   },
    //   // 3. We can add a new visual variant
    //   variants: {
    //     'with-shadow': {
    //       bg: 'red.400',
    //       boxShadow: '0 0 2px 2px #efdfde',
    //     },
    //     // 4. We can override existing variants
    //     solid: (props: StyleFunctionProps) => ({
    //       bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    //     }),
    //     // 5. We can add responsive variants
    //     sm: {
    //       bg: 'teal.500',
    //       fontSize: 'md',
    //     },
    //   },
    //   // 6. We can overwrite defaultProps
    //   defaultProps: {
    //     size: 'lg', // default is md
    //     variant: 'sm', // default is solid
    //     colorScheme: 'green', // default is gray
    //   },
    // },
  }
}

export default extendTheme(customTheme)
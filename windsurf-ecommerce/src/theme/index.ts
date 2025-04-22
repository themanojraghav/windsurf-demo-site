import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Custom theme for Chakra UI v2
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#b3e0ff',
      200: '#80caff',
      300: '#4db3ff',
      400: '#1a9dff',
      500: '#0080ff', // Primary brand color
      600: '#0066cc',
      700: '#004d99',
      800: '#003366',
      900: '#001a33',
    },
    accent: {
      50: '#fff0e6',
      100: '#ffd6b3',
      200: '#ffbd80',
      300: '#ffa34d',
      400: '#ff8a1a',
      500: '#ff7000', // Accent color
      600: '#cc5a00',
      700: '#994300',
      800: '#662d00',
      900: '#331600',
    },
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        primary: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        secondary: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.500',
          color: 'brand.500',
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;

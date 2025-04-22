import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../../theme';

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  // Explicitly cast the initialColorMode to the expected type
  const initialColorMode = theme.config.initialColorMode as 'light' | 'dark' | 'system';
  
  return (
    <>
      <ColorModeScript initialColorMode={initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  );
}

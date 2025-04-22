import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

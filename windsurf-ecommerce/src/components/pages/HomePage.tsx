import React from 'react';
import { Box } from '@chakra-ui/react';
import ImageSlider from '../molecules/ImageSlider';
import CategoriesSection from '../organisms/CategoriesSection';
import Layout from '../templates/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <Box>
        <ImageSlider />
        <CategoriesSection />
      </Box>
    </Layout>
  );
};

export default HomePage;

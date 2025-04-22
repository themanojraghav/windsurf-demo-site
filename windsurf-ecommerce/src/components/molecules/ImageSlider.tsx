import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Image, 
  IconButton, 
  useColorModeValue,
  Container,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Sample slider data
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=550&q=80',
    title: 'Premium Windsurfing Gear',
    description: 'Discover our latest collection of high-performance equipment',
    buttonText: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1564391254047-4361811af16e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=550&q=80',
    title: 'Summer Sale',
    description: 'Up to 40% off on selected items',
    buttonText: 'View Offers'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=550&q=80',
    title: 'New Arrivals',
    description: 'Check out our latest products for the season',
    buttonText: 'Explore'
  }
];

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Box 
      position="relative" 
      height={{ base: "300px", md: "400px", lg: "500px" }}
      overflow="hidden"
      width="100%"
      bg={bgColor}
    >
      {slides.map((slide, index) => (
        <Flex
          key={slide.id}
          position="absolute"
          width="100%"
          height="100%"
          opacity={index === currentSlide ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          zIndex={index === currentSlide ? 1 : 0}
          direction="column"
          justify="center"
          align="center"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            objectFit="cover"
            position="absolute"
            width="100%"
            height="100%"
            zIndex={-1}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            zIndex={0}
          />
          <Container maxW="container.xl" zIndex={1} position="relative">
            <Box 
              textAlign="center" 
              color="white" 
              p={4} 
              borderRadius="md"
            >
              <Heading as="h2" size="xl" mb={4}>
                {slide.title}
              </Heading>
              <Text fontSize="lg" mb={6}>
                {slide.description}
              </Text>
              <Button 
                bg="brand.500"
                color="white"
                size="lg"
                _hover={{ bg: 'brand.600' }}
                boxShadow="md"
                fontWeight="bold"
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Container>
        </Flex>
      ))}

      {/* Navigation buttons */}
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon w={8} h={8} />}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={prevSlide}
        bg="whiteAlpha.700"
        color="gray.800"
        variant="solid"
        rounded="full"
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'white' }}
        boxShadow="lg"
      />
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon w={8} h={8} />}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={nextSlide}
        bg="whiteAlpha.700"
        color="gray.800"
        variant="solid"
        rounded="full"
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'white' }}
        boxShadow="lg"
      />

      {/* Slide indicators */}
      <Flex 
        position="absolute" 
        bottom={4} 
        width="100%" 
        justify="center" 
        zIndex={2}
      >
        {slides.map((slide, index) => (
          <Box
            key={`slide-indicator-${slide.id}`}
            h={2}
            w={index === currentSlide ? 8 : 2}
            bg={index === currentSlide ? "brand.500" : "whiteAlpha.600"}
            mx={1}
            borderRadius="full"
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => setCurrentSlide(index)}
            boxShadow={index === currentSlide ? "md" : "none"}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;

import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  useColorModeValue,
  Flex,
  Icon,
  VStack
} from '@chakra-ui/react';
import { FaWind, FaTshirt, FaLifeRing, FaShippingFast, FaTools } from 'react-icons/fa';
import { GiSurfBoard } from 'react-icons/gi';

// Sample category data
const categories = [
  {
    id: 1,
    title: 'Boards',
    icon: GiSurfBoard,
    description: 'High-performance windsurfing boards for all skill levels',
    image: 'https://images.unsplash.com/photo-1575448891237-7e4889662608?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 2,
    title: 'Sails',
    icon: FaWind,
    description: 'Durable and lightweight sails for maximum performance',
    image: 'https://images.unsplash.com/photo-1601671868302-a4b8e3c5e056?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 3,
    title: 'Apparel',
    icon: FaTshirt,
    description: 'Wetsuits, rashguards, and other essential clothing',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 4,
    title: 'Accessories',
    icon: FaLifeRing,
    description: 'Harnesses, booms, masts, and other essential gear',
    image: 'https://images.unsplash.com/photo-1517931362871-516b18f66a4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 5,
    title: 'Parts & Repairs',
    icon: FaTools,
    description: 'Replacement parts and repair kits to keep you on the water',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 6,
    title: 'Packages',
    icon: FaShippingFast,
    description: 'Complete windsurfing packages for beginners and experts',
    image: 'https://images.unsplash.com/photo-1505246170520-1c003eda7abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
  }
];

export const CategoriesSection = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box py={16} bg={bg}>
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          size="xl" 
          mb={3} 
          textAlign="center"
          bgGradient="linear(to-r, brand.500, accent.500)"
          backgroundClip="text"
          fontWeight="bold"
        >
          Shop by Category
        </Heading>
        <Text
          textAlign="center"
          fontSize="lg"
          color={textColor}
          mb={12}
          maxW="2xl"
          mx="auto"
        >
          Explore our wide range of windsurfing equipment and accessories
        </Text>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {categories.map((category) => (
            <Box
              key={category.id}
              bg={cardBg}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl'
              }}
              cursor="pointer"
              borderWidth="1px"
              borderColor={borderColor}
              role="group"
            >
              <Box position="relative" height="200px" overflow="hidden" borderTopRadius="lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  transition="transform 0.5s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="blackAlpha.300"
                  transition="all 0.3s"
                  _groupHover={{ bg: "blackAlpha.0" }}
                />
                <Box
                  position="absolute"
                  top={3}
                  right={3}
                  bg="brand.500"
                  color="white"
                  fontSize="sm"
                  fontWeight="bold"
                  px={3}
                  py={1}
                  borderRadius="full"
                  boxShadow="md"
                >
                  New
                </Box>
              </Box>
              
              <VStack p={5} align="start" spacing={3}>
                <Flex align="center" width="100%" justifyContent="space-between">
                  <Flex align="center">
                    <Icon as={category.icon} boxSize={6} color="brand.500" mr={2} />
                    <Heading as="h3" size="md">
                      {category.title}
                    </Heading>
                  </Flex>
                  <Icon 
                    as={category.icon} 
                    boxSize={5} 
                    color="gray.400" 
                    opacity={0.3} 
                    _groupHover={{ color: 'brand.500', opacity: 0.8 }}
                    transition="all 0.3s ease"
                  />
                </Flex>
                <Text color={textColor}>
                  {category.description}
                </Text>
                <Box 
                  as="span" 
                  color="brand.500" 
                  fontWeight="semibold"
                  fontSize="sm"
                  mt={2}
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                  transition="all 0.2s"
                >
                  Browse Products →
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CategoriesSection;

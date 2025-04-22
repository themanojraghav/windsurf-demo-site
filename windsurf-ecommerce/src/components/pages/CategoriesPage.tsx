import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  Badge,
  useColorModeValue,
  Button,
  Icon,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tag,
  IconButton
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaFilter, FaStar, FaHeart, FaShoppingCart, FaWind, FaTshirt, FaLifeRing, FaShippingFast, FaTools } from 'react-icons/fa';
import { GiSurfBoard } from 'react-icons/gi';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Pro Windsurfing Board',
    category: 'Boards',
    price: 899.99,
    rating: 4.8,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1575448891237-7e4889662608?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: true,
    isSale: false,
    discount: 0,
    description: 'High-performance windsurfing board for professionals',
    tags: ['Professional', 'Lightweight', 'Carbon']
  },
  {
    id: 2,
    name: 'Beginner Friendly Board',
    category: 'Boards',
    price: 499.99,
    rating: 4.5,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1580629905303-faaa03202854?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: false,
    isSale: true,
    discount: 15,
    description: 'Stable and easy to use board for beginners',
    tags: ['Beginner', 'Stable', 'Wide']
  },
  {
    id: 3,
    name: 'Racing Sail',
    category: 'Sails',
    price: 649.99,
    rating: 4.7,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1601671868302-a4b8e3c5e056?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: true,
    isSale: false,
    discount: 0,
    description: 'Lightweight racing sail for maximum speed',
    tags: ['Racing', 'Lightweight', 'Performance']
  },
  {
    id: 4,
    name: 'All-Around Sail',
    category: 'Sails',
    price: 399.99,
    rating: 4.3,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1565246075196-57ac4a48a36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: false,
    isSale: true,
    discount: 10,
    description: 'Versatile sail for all conditions',
    tags: ['Versatile', 'All-Around', 'Durable']
  },
  {
    id: 5,
    name: 'Premium Wetsuit',
    category: 'Apparel',
    price: 299.99,
    rating: 4.6,
    reviews: 27,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: false,
    isSale: false,
    discount: 0,
    description: 'High-quality wetsuit for cold water conditions',
    tags: ['Warm', 'Flexible', 'Premium']
  },
  {
    id: 6,
    name: 'Harness',
    category: 'Accessories',
    price: 149.99,
    rating: 4.4,
    reviews: 19,
    image: 'https://images.unsplash.com/photo-1517931362871-516b18f66a4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: true,
    isSale: false,
    discount: 0,
    description: 'Comfortable harness for long sessions',
    tags: ['Comfortable', 'Adjustable', 'Padded']
  },
  {
    id: 7,
    name: 'Repair Kit',
    category: 'Parts & Repairs',
    price: 79.99,
    rating: 4.2,
    reviews: 11,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: false,
    isSale: true,
    discount: 20,
    description: 'Complete repair kit for boards and sails',
    tags: ['Repair', 'Complete', 'Essential']
  },
  {
    id: 8,
    name: 'Beginner Package',
    category: 'Packages',
    price: 1299.99,
    rating: 4.9,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1505246170520-1c003eda7abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80',
    isNew: false,
    isSale: false,
    discount: 0,
    description: 'Complete beginner package with board, sail, and accessories',
    tags: ['Beginner', 'Complete', 'Package']
  }
];

// Category data
const categories = [
  { id: 1, name: 'Boards', icon: GiSurfBoard, count: 15 },
  { id: 2, name: 'Sails', icon: FaWind, count: 23 },
  { id: 3, name: 'Apparel', icon: FaTshirt, count: 18 },
  { id: 4, name: 'Accessories', icon: FaLifeRing, count: 31 },
  { id: 5, name: 'Parts & Repairs', icon: FaTools, count: 14 },
  { id: 6, name: 'Packages', icon: FaShippingFast, count: 7 }
];

const CategoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'white');

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (selectedCategory && product.category !== selectedCategory) return false;
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default: // featured
        return 0;
    }
  });

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Format price with discount
  const formatPrice = (price: number, discount: number) => {
    if (discount > 0) {
      const discountedPrice = price * (1 - discount / 100);
      return (
        <Flex align="center">
          <Text as="span" fontWeight="bold" fontSize="lg" color="brand.500">
            ${discountedPrice.toFixed(2)}
          </Text>
          <Text as="span" textDecoration="line-through" fontSize="sm" color="gray.500" ml={2}>
            ${price.toFixed(2)}
          </Text>
        </Flex>
      );
    }
    return (
      <Text fontWeight="bold" fontSize="lg" color="brand.500">
        ${price.toFixed(2)}
      </Text>
    );
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        {/* Breadcrumb */}
        <Breadcrumb 
          spacing="8px" 
          separator={<ChevronRightIcon color="gray.500" />} 
          mb={6}
          fontSize="sm"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          {selectedCategory && (
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{selectedCategory}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>

        {/* Page Title */}
        <Box mb={8} textAlign="center">
          <Heading 
            as="h1" 
            size="xl" 
            mb={3}
            color={headingColor}
          >
            {selectedCategory ?? "All Categories"}
          </Heading>
          <Text color={textColor} maxW="2xl" mx="auto">
            Explore our wide range of windsurfing equipment and accessories. 
            Find the perfect gear for your next adventure on the water.
          </Text>
        </Box>

        {/* Main Content */}
        <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
          {/* Sidebar / Filters */}
          <Box 
            w={{ base: '100%', lg: '280px' }} 
            bg={cardBg} 
            p={5} 
            borderRadius="lg" 
            boxShadow="sm"
            borderWidth="1px"
            borderColor={borderColor}
            position="sticky"
            top="100px"
            alignSelf="flex-start"
          >
            <VStack align="stretch" spacing={6}>
              {/* Categories */}
              <Box>
                <Heading size="sm" mb={3}>Categories</Heading>
                <VStack align="stretch" spacing={2}>
                  <Button 
                    variant="ghost" 
                    justifyContent="flex-start" 
                    fontWeight={selectedCategory === null ? "bold" : "normal"}
                    color={selectedCategory === null ? "brand.500" : undefined}
                    leftIcon={<Icon as={FaFilter} />}
                    onClick={() => handleCategorySelect(null)}
                  >
                    All Categories
                  </Button>
                  {categories.map(category => (
                    <Button 
                      key={category.id}
                      variant="ghost" 
                      justifyContent="flex-start" 
                      fontWeight={selectedCategory === category.name ? "bold" : "normal"}
                      color={selectedCategory === category.name ? "brand.500" : undefined}
                      leftIcon={<Icon as={category.icon} />}
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </VStack>
              </Box>

              <Divider />

              {/* Price Range */}
              <Box>
                <Heading size="sm" mb={3}>Price Range</Heading>
                <RangeSlider
                  // Using an array for min and max thumbs
                  // @ts-ignore - Chakra UI v2 RangeSlider expects string[] for aria-label
                  aria-label={["min price", "max price"]}
                  defaultValue={[0, 1500]}
                  min={0}
                  max={1500}
                  step={50}
                  onChange={handlePriceRangeChange}
                  mb={4}
                  colorScheme="brand"
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Flex justify="space-between">
                  <Text fontSize="sm">${priceRange[0]}</Text>
                  <Text fontSize="sm">${priceRange[1]}</Text>
                </Flex>
              </Box>

              <Divider />

              {/* Rating Filter */}
              <Box>
                <Heading size="sm" mb={3}>Rating</Heading>
                <VStack align="stretch" spacing={2}>
                  {[4, 3, 2, 1].map(rating => (
                    <Checkbox key={rating} colorScheme="brand">
                      <Flex align="center">
                        {Array(5).fill('').map((_, i) => (
                          <Icon 
                            key={`rating-star-${rating}-${i}`} 
                            as={FaStar} 
                            color={i < rating ? "yellow.400" : "gray.300"} 
                            boxSize={3.5}
                            mr={0.5}
                          />
                        ))}
                        <Text ml={2} fontSize="sm">& Up</Text>
                      </Flex>
                    </Checkbox>
                  ))}
                </VStack>
              </Box>

              <Divider />

              {/* Tags */}
              <Box>
                <Heading size="sm" mb={3}>Product Tags</Heading>
                <Flex wrap="wrap" gap={2}>
                  {['Beginner', 'Professional', 'Racing', 'Lightweight', 'Durable', 'Performance'].map(tag => (
                    <Tag 
                      key={tag} 
                      size="md" 
                      variant="outline" 
                      colorScheme="brand"
                      cursor="pointer"
                      _hover={{ bg: 'brand.50' }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </Box>

          {/* Product Grid */}
          <Box flex="1">
            {/* Search and Sort Controls */}
            <Flex 
              mb={6} 
              direction={{ base: 'column', md: 'row' }} 
              justify="space-between"
              align={{ base: 'stretch', md: 'center' }}
              gap={4}
              p={4}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="sm"
              borderWidth="1px"
              borderColor={borderColor}
            >
              <InputGroup maxW={{ base: '100%', md: '320px' }}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  borderRadius="md"
                />
              </InputGroup>
              
              <HStack>
                <Text fontSize="sm" whiteSpace="nowrap">Sort by:</Text>
                <Select 
                  value={sortBy} 
                  onChange={handleSortChange}
                  w={{ base: '100%', md: '180px' }}
                  size="md"
                  borderRadius="md"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </Select>
              </HStack>
            </Flex>

            {/* Results Count */}
            <Text mb={4} color={textColor}>
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory ? ` in ${selectedCategory}` : ''}
            </Text>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
                {sortedProducts.map(product => (
                  <Box
                    key={product.id}
                    bg={cardBg}
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: 'lg'
                    }}
                    borderWidth="1px"
                    borderColor={borderColor}
                    role="group"
                  >
                    <Box position="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        h="220px"
                        w="100%"
                        objectFit="cover"
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                      
                      {/* Product badges */}
                      <Flex position="absolute" top={2} left={2}>
                        {product.isNew && (
                          <Badge 
                            bg="brand.500" 
                            color="white" 
                            px={2} 
                            py={1} 
                            borderRadius="md"
                            mr={2}
                          >
                            New
                          </Badge>
                        )}
                        {product.isSale && (
                          <Badge 
                            bg="accent.500" 
                            color="white" 
                            px={2} 
                            py={1} 
                            borderRadius="md"
                          >
                            Sale {product.discount}% Off
                          </Badge>
                        )}
                      </Flex>
                      
                      {/* Quick action buttons */}
                      <Flex 
                        position="absolute" 
                        bottom={-20} 
                        left="50%" 
                        transform="translateX(-50%)"
                        bg={cardBg}
                        borderRadius="md"
                        boxShadow="md"
                        p={2}
                        transition="all 0.3s ease"
                        opacity={0}
                        _groupHover={{ bottom: 4, opacity: 1 }}
                        zIndex={1}
                      >
                        <IconButton
                          aria-label="Add to wishlist"
                          icon={<FaHeart />}
                          size="sm"
                          variant="ghost"
                          colorScheme="brand"
                          mr={2}
                        />
                        <IconButton
                          aria-label="Add to cart"
                          icon={<FaShoppingCart />}
                          size="sm"
                          colorScheme="brand"
                        />
                      </Flex>
                    </Box>
                    
                    <Box p={4}>
                      <Text 
                        fontSize="sm" 
                        color={textColor}
                        mb={1}
                      >
                        {product.category}
                      </Text>
                      <Heading 
                        as="h3" 
                        size="md" 
                        mb={2}
                        noOfLines={1}
                      >
                        {product.name}
                      </Heading>
                      
                      {/* Rating */}
                      <Flex align="center" mb={2}>
                        {Array(5).fill('').map((_, i) => (
                          <Icon 
                            key={`product-star-${product.id}-${i}`} 
                            as={FaStar} 
                            color={i < Math.floor(product.rating) ? "yellow.400" : "gray.300"} 
                            boxSize={3.5}
                            mr={0.5}
                          />
                        ))}
                        <Text ml={1} fontSize="sm" color={textColor}>
                          ({product.reviews})
                        </Text>
                      </Flex>
                      
                      {/* Price */}
                      {formatPrice(product.price, product.discount)}
                      
                      {/* Tags */}
                      <Flex mt={3} flexWrap="wrap" gap={2}>
                        {product.tags.map(tag => (
                          <Tag 
                            key={tag} 
                            size="sm" 
                            colorScheme="gray"
                            borderRadius="full"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </Flex>
                    </Box>
                    
                    {/* Add to cart button */}
                    <Box p={4} pt={0}>
                      <Button 
                        w="100%" 
                        colorScheme="brand"
                        size="sm"
                        leftIcon={<FaShoppingCart />}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <Box 
                textAlign="center" 
                py={10} 
                bg={cardBg} 
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
              >
                <Heading size="md" mb={3}>No products found</Heading>
                <Text color={textColor}>
                  Try adjusting your filters or search criteria.
                </Text>
                <Button 
                  mt={6} 
                  colorScheme="brand" 
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 1500]);
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CategoriesPage;

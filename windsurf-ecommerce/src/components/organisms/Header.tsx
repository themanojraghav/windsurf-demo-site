import React from 'react';
import { 
  Box, 
  Flex, 
  Image, 
  HStack, 
  IconButton, 
  useDisclosure, 
  Stack,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
  Text,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Navigation items with their routes
const Links = [
  { name: 'Home', path: '/' },
  { name: 'Categories', path: '/categories' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const NavLink = ({ children, path }: { children: React.ReactNode; path: string }) => {
  const location = useLocation();
  const isActive = location.pathname === path || 
                  (path !== '/' && location.pathname.startsWith(path));
  
  return (
    <Link
      as={RouterLink}
      to={path}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      fontWeight={isActive ? 'bold' : 'normal'}
      color={isActive ? 'brand.500' : undefined}
      position="relative"
      _after={isActive ? {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '2px',
        bg: 'brand.500',
        borderRadius: 'full'
      } : undefined}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      as="header" 
      bg={useColorModeValue('white', 'gray.800')} 
      px={4} 
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                <Flex alignItems="center">
                  <Image 
                    src="https://via.placeholder.com/150x50?text=WindSurf" 
                    alt="WindSurf Logo"
                    h="40px"
                  />
                  <Text 
                    ml={2} 
                    fontWeight="bold" 
                    fontSize="xl"
                    bgGradient="linear(to-r, brand.500, accent.500)"
                    bgClip="text"
                    display={{ base: 'none', md: 'block' }}
                  >
                    WindSurf
                  </Text>
                </Flex>
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              mr={4}
              color={useColorModeValue('brand.500', 'brand.200')}
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700')
              }}
            />
            <Button
              variant={'outline'}
              colorScheme={'brand'}
              size={'sm'}
              mr={4}
              borderWidth="2px"
            >
              Sign In
            </Button>
            <Button
              variant={'solid'}
              bg="brand.500"
              color="white"
              size={'sm'}
              _hover={{
                bg: 'brand.600'
              }}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Header;

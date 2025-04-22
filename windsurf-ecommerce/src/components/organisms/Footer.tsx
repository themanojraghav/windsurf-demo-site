import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Input,
  IconButton,
  Heading,
  VisuallyHidden,
  chakra
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkHoverColor = useColorModeValue('brand.500', 'brand.300');
  
  return (
    <Box
      bg={bgColor}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={'container.xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Heading 
                size="md" 
                bgGradient="linear(to-r, brand.500, accent.500)"
                backgroundClip="text"
                fontWeight="bold"
              >
                WindSurf
              </Heading>
            </Box>
            <Text fontSize={'sm'} color={linkColor}>
              © {new Date().getFullYear()} WindSurf. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Pinterest'} href={'#'}>
                <FaPinterest />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>About Us</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Blog</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Careers</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Help Center</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Safety Center</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Community Guidelines</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Shipping & Returns</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                }}
                borderRadius="md"
              />
              <IconButton
                bg="brand.500"
                color="white"
                aria-label="Subscribe"
                icon={<BiMailSend />}
                _hover={{ bg: 'brand.600' }}
                borderRadius="md"
              />
            </Stack>
            <Text fontSize="sm">
              Subscribe to our newsletter for the latest products, deals, and windsurfing tips.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={borderColor}>
        <Container
          as={Stack}
          maxW={'container.xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text color={linkColor}>© {new Date().getFullYear()} WindSurf. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Privacy Policy</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Terms of Service</Link>
            <Link href={'#'} color={linkColor} _hover={{ color: linkHoverColor }}>Cookie Policy</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

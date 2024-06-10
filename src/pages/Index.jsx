import { Box, Container, Flex, Heading, Text, VStack, Link, Image, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.700" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="xl">Sharing my thoughts and experiences with the world.</Text>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={8}>Latest Posts</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a short excerpt from the blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" mt={2} display="block">Read More</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a short excerpt from the blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" mt={2} display="block">Read More</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 3</Heading>
              <Text mt={4}>This is a short excerpt from the blog post. It gives a brief overview of the content...</Text>
              <Link color="teal.500" mt={2} display="block">Read More</Link>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>© 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <FaTwitter />
              </Link>
              <Link href="#" isExternal>
                <FaFacebook />
              </Link>
              <Link href="#" isExternal>
                <FaInstagram />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
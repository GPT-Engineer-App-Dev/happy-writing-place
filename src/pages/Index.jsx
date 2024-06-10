import { Box, Container, Flex, Heading, Text, VStack, Link, Image, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" padding={4}>
        <HStack spacing={8} alignItems="center">
          <Heading size="md">My Blog</Heading>
          <HStack as="nav" spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box
        bgImage="url('https://via.placeholder.com/1500')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="60vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
        padding={4}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Blog
        </Heading>
        <Text fontSize="xl">Sharing my thoughts and experiences</Text>
      </Box>

      {/* Blog Section */}
      <Container maxW="container.md" py={8}>
        <Heading as="h2" size="xl" mb={6}>
          Latest Posts
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 1</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
            <Link color="teal.500" mt={2} display="block">
              Read More
            </Link>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 2</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
            <Link color="teal.500" mt={2} display="block">
              Read More
            </Link>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Post Title 3</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
            <Link color="teal.500" mt={2} display="block">
              Read More
            </Link>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text>© 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
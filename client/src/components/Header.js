// Import necessary Chakra UI components
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Link,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // If you are using React Router

// Create your Header component
function Header() {
  return (
    <ChakraProvider>
      <Box bg="teal.500" p={6}>
        <Flex align="center">
          <Heading as="h1" size="xl" color="white">
            Student Record
          </Heading>

          <Spacer />

          <Box>
            <Link as={RouterLink} to="/" color="white" mx={2}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="white" mx={2}>
              About
            </Link>
            <Link as={RouterLink} to="/contact" color="white" mx={2}>
              Contact
            </Link>
            <Link as={RouterLink} to="/edit" color="white" mx={2}>
              Edit
            </Link>
            <Link as={RouterLink} to="/show" color="white" mx={2}>
              List
            </Link>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Header;

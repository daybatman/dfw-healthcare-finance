import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Box fontWeight="bold" fontSize="xl">
          <RouterLink to="/">DFW Healthcare Finance Connect</RouterLink>
        </Box>
        
        <Flex alignItems="center" gap={4}>
          <Button as={RouterLink} to="/" variant="ghost">
            Home
          </Button>
          <Button as={RouterLink} to="/about" variant="ghost">
            About
          </Button>
          <Button as={RouterLink} to="/events" variant="ghost">
            Events
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 
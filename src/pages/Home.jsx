import { Box, Container, Heading, Text, Button, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaHandshake, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa'

const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, teal.50, blue.50, white)',
    'linear(to-b, teal.900, blue.900, gray.800)'
  )

  return (
    <Box minH="100vh" bgGradient={bgGradient} width="100%">
      {/* Hero Section */}
      <Box py={20} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={6} textAlign="center" align="center">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Welcome to DFW Healthcare Finance Connect
            </Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              A community-driven platform for healthcare finance professionals to connect, collaborate, and grow together.
            </Text>
            <Button
              as={RouterLink}
              to="/events"
              size="lg"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.400, blue.500)"
              _hover={{
                bgGradient: 'linear(to-r, teal.500, blue.600)',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Join Our Next Event
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box py={16} bg={useColorModeValue('white', 'gray.800')} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Our Mission
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              We bring together healthcare finance professionals to foster authentic connections, share insights, and create meaningful opportunities for growth and collaboration in the healthcare industry.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Core Values */}
      <Box py={16} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={12}>
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Our Core Values
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Box
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="lg"
                shadow="md"
                _hover={{
                  transform: 'translateY(-5px)',
                  shadow: 'lg',
                  borderColor: 'teal.400',
                }}
                border="2px solid"
                borderColor="transparent"
                transition="all 0.3s"
              >
                <Stack spacing={4} align="center" textAlign="center">
                  <Box color="teal.500" fontSize="4xl">
                    <FaHandshake />
                  </Box>
                  <Heading size="md" color="teal.600">Authentic Connections</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Building genuine relationships among healthcare finance professionals
                  </Text>
                </Stack>
              </Box>

              <Box
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="lg"
                shadow="md"
                _hover={{
                  transform: 'translateY(-5px)',
                  shadow: 'lg',
                  borderColor: 'blue.400',
                }}
                border="2px solid"
                borderColor="transparent"
                transition="all 0.3s"
              >
                <Stack spacing={4} align="center" textAlign="center">
                  <Box color="blue.500" fontSize="4xl">
                    <FaUsers />
                  </Box>
                  <Heading size="md" color="blue.600">Community First</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Creating a supportive environment for professional growth
                  </Text>
                </Stack>
              </Box>

              <Box
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="lg"
                shadow="md"
                _hover={{
                  transform: 'translateY(-5px)',
                  shadow: 'lg',
                  borderColor: 'purple.400',
                }}
                border="2px solid"
                borderColor="transparent"
                transition="all 0.3s"
              >
                <Stack spacing={4} align="center" textAlign="center">
                  <Box color="purple.500" fontSize="4xl">
                    <FaLightbulb />
                  </Box>
                  <Heading size="md" color="purple.600">Innovation</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Embracing new ideas and approaches in healthcare finance
                  </Text>
                </Stack>
              </Box>

              <Box
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="lg"
                shadow="md"
                _hover={{
                  transform: 'translateY(-5px)',
                  shadow: 'lg',
                  borderColor: 'teal.400',
                }}
                border="2px solid"
                borderColor="transparent"
                transition="all 0.3s"
              >
                <Stack spacing={4} align="center" textAlign="center">
                  <Box color="teal.500" fontSize="4xl">
                    <FaChartLine />
                  </Box>
                  <Heading size="md" color="teal.600">Growth</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Fostering continuous learning and development
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg={useColorModeValue('white', 'gray.800')} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Join Our Community
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              Be part of a vibrant community of healthcare finance professionals. Connect, learn, and grow with us.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to="/events"
                size="lg"
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, blue.500)"
                _hover={{
                  bgGradient: 'linear(to-r, teal.500, blue.600)',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                View Upcoming Events
              </Button>
              <Button
                as={RouterLink}
                to="/about"
                size="lg"
                variant="outline"
                colorScheme="teal"
                _hover={{
                  bg: 'teal.50',
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                }}
              >
                Learn More About Us
              </Button>
            </Stack>
            <Text color="teal.600">
              Email: <a href="mailto:dfwhealthcarefinanceconnect@gmail.com" style={{ color: 'blue.500' }}>dfwhealthcarefinanceconnect@gmail.com</a>
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 
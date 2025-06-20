import { Box, Container, Heading, Text, Button, SimpleGrid, Stack, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
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
              Welcome to DFW Common Ground
            </Heading>
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              Uniting DFW's healthcare leaders for a healthier tomorrow through collaborative dialogue on ACOs, Value-Based Care, and accessible healthcare.
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

      {/* What's Our Common Ground Section */}
      <Box py={16} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading as="h2" size="xl" bgGradient="linear(to-r, teal.400, blue.500)" bgClip="text">
              What's Our Common Ground?
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="900px">
              Hey there, DFW healthcare enthusiasts! Ever feel like you're navigating the wild world of healthcare solo? Or maybe you've got some game-changing ideas bubbling up but no one to bounce them off? Well, you've found your people!<br/><br/>
              DFW Common Ground is your no-frills, all-thrills spot to connect, collaborate, and get real about making healthcare in the USA more accessible, affordable, and transparent. We're on a mission to sprinkle some clarity (and maybe a little magic) on big topics like Accountable Care Organizations (ACOs) and value-based care.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Common Ground Info Tiles Section */}
      <Box py={12} width="100%">
        <Container maxW="container.xl" px={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={6} bg={useColorModeValue('white', 'gray.800')} borderRadius="lg" boxShadow="md" textAlign="left" _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}>
              <Heading size="md" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>So, who's invited to this party?</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                Everyone! Whether you're an industry leader ready to share your wisdom, a middle manager looking for fresh solutions (or, let's be honest, wanting to brag about the awesome ones you've already implemented – we love that energy!), a physician eager to connect outside the clinic, or a young professional just stepping into this fascinating field and hungry to learn, you're exactly who we're looking for.
              </Text>
            </Box>
            <Box p={6} bg={useColorModeValue('white', 'gray.800')} borderRadius="lg" boxShadow="md" textAlign="left" _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}>
              <Heading size="md" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>How do we do it?</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                We meet up every other month around DFW for casual gatherings. Think good conversations, shared insights, and plenty of "aha!" moments, all while you grab your own favorite food and drinks. No fancy presentations, just authentic connections.
              </Text>
            </Box>
            <Box p={6} bg={useColorModeValue('white', 'gray.800')} borderRadius="lg" boxShadow="md" textAlign="left" _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}>
              <Heading size="md" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>What happens when we get together?</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                It's all about opening our minds to help shape the future of US healthcare. We swap stories, dissect problems, celebrate implemented solutions (because who doesn't love a good win?), and brainstorm what's next. It's a fantastic chance for learning and growth, no matter where you are in your career. We're here to learn from each other and collectively do our bit to move the needle.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Participant Expectations Section */}
      <Box py={16} width="100%" bg={useColorModeValue('gray.50', 'gray.700')}>
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} direction={{ base: 'column', md: 'row' }} align="flex-start">
            <Box flex="1">
              <Heading as="h2" size="xl" mb={6} textAlign={{ base: 'center', md: 'left' }}>
                What do we expect from you?
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} textAlign={{ base: 'center', md: 'left' }}>
                We're all about genuine connections and shared growth. To make the most of DFW Common Ground, we ask everyone to bring their true selves, stay curious, and help create a welcoming space for all.
              </Text>
            </Box>
            <Box flex="1" width="100%">
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">Show Up Authentically</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Be yourself! Honest conversations and real stories are what make our community special.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">Support Each Other</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Celebrate wins, share challenges, and offer encouragement. We grow stronger together.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">Stay Purposeful</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Remember why you joined: to connect, learn, and contribute. Keep our shared mission in mind.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">Embrace New Voices</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Every perspective matters. Welcome newcomers, listen actively, and help everyone feel at home.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
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
              Be part of a vibrant community of professionals. Connect, learn, and grow with us.
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
              Email: <a href="mailto:dfwcommonground@gmail.com" style={{ color: 'blue.500' }}>dfwcommonground@gmail.com</a>
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Blogs Section */}
      <Box py={16} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Blogs
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              Our community blog is launching soon! Get ready for exciting stories, insights, and thought leadership from our members.
            </Text>
            <Button
              size="lg"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.400, blue.500)"
              _hover={{
                bgGradient: 'linear(to-r, teal.500, blue.600)',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              cursor="default"
            >
              Stay Tuned
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 
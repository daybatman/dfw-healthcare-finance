import { Box, Container, Heading, Text, SimpleGrid, Button, Stack, Badge, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_mbu1h2p'
const TEMPLATE_ID = 'template_omdkn0h'
const PUBLIC_KEY = 'evb4r3PQ7l4sHbZAK'

const EventCard = ({ title, date, description, type, onRegister }) => (
  <Box p={6} bg={useColorModeValue('white', 'gray.800')} borderWidth="1px" borderRadius="lg" boxShadow="md" transition="all 0.3s" _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}>
    <Stack spacing={4}>
      <Badge colorScheme="blue" alignSelf="start">
        {type}
      </Badge>
      <Heading size="md">{title}</Heading>
      <Text color={useColorModeValue('gray.500', 'gray.400')}>{date}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{description}</Text>
      <Button colorScheme="blue" variant="outline" size="sm" onClick={onRegister}>
        Register Now
      </Button>
    </Stack>
  </Box>
)

const RegistrationModal = ({ isOpen, onClose }) => {
  const form = useRef()
  const toast = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast({ title: 'Registration successful!', description: 'We have received your registration.', status: 'success', duration: 5000, isClosable: true })
        setLoading(false)
        onClose()
      })
      .catch(() => {
        toast({ title: 'Registration failed', description: 'Please try again later.', status: 'error', duration: 5000, isClosable: true })
        setLoading(false)
      })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Event Registration</ModalHeader>
        <ModalCloseButton />
        <form ref={form} onSubmit={handleSubmit}>
          <ModalBody pb={6}>
            <FormControl isRequired mb={3}>
              <FormLabel>Name</FormLabel>
              <Input name="user_name" placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired mb={3}>
              <FormLabel>Email</FormLabel>
              <Input name="user_email" type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="Anything you'd like to share?" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit" isLoading={loading}>
              Submit
            </Button>
            <Button onClick={onClose} variant="ghost">Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

const Events = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const upcomingEvents = [
    {
      title: "Networking Mixer",
      date: "Last week of July 2025",
      description: "Join us for a relaxed networking mixer to connect with fellow professionals, share insights, and build new relationships in the DFW healthcare community.",
      type: "Networking"
    }
  ]

  return (
    <Box minH="100vh" bgGradient={useColorModeValue('linear(to-b, teal.50, blue.50, white)', 'linear(to-b, teal.900, blue.900, gray.800)')} width="100%">
      <Box py={4} width="100%" mb={8}>
        <Container maxW="container.xl" px={4}>
          <Stack spacing={12} textAlign="center" align="center">
            <Heading as="h1" size="2xl" color={useColorModeValue('teal.500', 'teal.300')} fontWeight="extrabold" textAlign="center">
              Upcoming Events
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} onRegister={onOpen} />
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      <Box py={16} bg={useColorModeValue('white', 'gray.800')} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading as="h2" size="xl" bgGradient="linear(to-r, teal.400, blue.500)" bgClip="text">
              Get Involved
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
              Want to participate in our events or need more information? Contact us to learn more about how you can get involved in our community.
            </Text>
            <Button as="a" href="mailto:dfwcommonground@gmail.com" colorScheme="blue" size="lg">
              Get Involved
            </Button>
          </Stack>
        </Container>
      </Box>
      <RegistrationModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Events 
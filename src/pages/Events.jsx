import { Box, Container, Heading, Text, SimpleGrid, Button, Stack, Badge } from '@chakra-ui/react'

const EventCard = ({ title, date, description, type }) => (
  <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="sm">
    <Stack spacing={4}>
      <Badge colorScheme="blue" alignSelf="start">
        {type}
      </Badge>
      <Heading size="md">{title}</Heading>
      <Text color="gray.500">{date}</Text>
      <Text color="gray.600">{description}</Text>
      <Button colorScheme="blue" variant="outline" size="sm">
        Register Now
      </Button>
    </Stack>
  </Box>
)

const Events = () => {
  const upcomingEvents = [
    {
      title: "Healthcare Finance Roundtable",
      date: "Every First Tuesday, 6:00 PM",
      description: "Join us for an informal discussion about current trends and challenges in healthcare finance.",
      type: "Monthly"
    },
    {
      title: "Innovation in Healthcare Finance",
      date: "March 20, 2024",
      description: "A special event exploring emerging technologies and their impact on healthcare financial management.",
      type: "Special"
    },
    {
      title: "Networking Mixer",
      date: "Every Third Thursday, 5:30 PM",
      description: "Connect with fellow healthcare finance professionals in a relaxed, casual setting.",
      type: "Monthly"
    },
    {
      title: "Healthcare Finance Workshop",
      date: "April 15, 2024",
      description: "Hands-on workshop focusing on practical solutions for common healthcare finance challenges.",
      type: "Workshop"
    }
  ]

  return (
    <Box py={16}>
      <Container maxW="1200px">
        <Stack spacing={12}>
          <Box>
            <Heading size="xl" mb={6}>Upcoming Events</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <Heading size="xl" mb={6}>Get Involved</Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Want to participate in our events or need more information? Contact us to learn more
              about how you can get involved in our healthcare finance community.
            </Text>
            <Button colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Events 
import { Box, Container, Heading, Text, Stack, SimpleGrid, Image } from '@chakra-ui/react'

const About = () => {
  return (
    <Box py={16}>
      <Container maxW="1200px">
        <Stack spacing={12}>
          {/* Vision Section */}
          <Box>
            <Heading size="xl" mb={6}>Our Vision</Heading>
            <Text fontSize="lg" color="gray.600">
              To create a vibrant community where healthcare finance professionals can connect, share insights, 
              and drive innovation in healthcare financial management. We believe that meaningful connections 
              and authentic conversations are the key to transforming healthcare finance.
            </Text>
          </Box>

          {/* What We Do Section */}
          <Box>
            <Heading size="xl" mb={6}>What We Do</Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              We create spaces where healthcare finance professionals can:
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading size="md" mb={4}>Connect Authentically</Heading>
                <Text color="gray.600">
                  Build genuine relationships with peers who understand the unique challenges of healthcare finance.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>Share Knowledge</Heading>
                <Text color="gray.600">
                  Exchange insights and best practices in a relaxed, jargon-free environment.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>Drive Innovation</Heading>
                <Text color="gray.600">
                  Collaborate on solutions that improve healthcare financial management and patient outcomes.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>Grow Together</Heading>
                <Text color="gray.600">
                  Support each other's professional development and career advancement in healthcare finance.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Join Us Section */}
          <Box>
            <Heading size="xl" mb={6}>Why Join Us?</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Box>
                <Heading size="md" mb={4}>Real Connections</Heading>
                <Text color="gray.600">
                  No forced networking or elevator pitches. Just meaningful conversations with like-minded professionals.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>Industry Insights</Heading>
                <Text color="gray.600">
                  Stay informed about the latest trends and challenges in healthcare finance.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>Growth Opportunities</Heading>
                <Text color="gray.600">
                  Access resources and connections that can help advance your career in healthcare finance.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default About 
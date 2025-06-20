import { Box, Container, Heading, Text, Stack, SimpleGrid, useColorModeValue, Image, Flex, Link, IconButton } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import vamikaMehra from '../assets/vamika-mehra.jpg'

const teamMembers = [
  {
    name: 'Vamika Mehra',
    image: vamikaMehra,
    linkedin: 'https://www.linkedin.com/in/vamikamehra/',
    bio: "Hi, I'm Vamika Mehra, founder of DFW Common Ground. As a Financial Advisor at Baylor Quality Health Care Alliance, one of the country's top ACOs, I leverage years of prior Big Four consulting experience and an MBA in Finance and Accounting from Southern Methodist University, Dallas. My pivotal journey into healthcare finance began just over a year ago, driven by a passion to make healthcare more affordable and accessible by deepening and sharing insights into the evolving world of ACOs – which is precisely why I founded DFW Common Ground."
  }
]

const TeamMemberCard = ({ name, image, bio, linkedin }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      <Image
        src={image}
        alt={name}
        borderRadius="lg"
        w="full"
        maxW="350px"
        mx="auto"
        mb={4}
        boxShadow="md"
      />
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Heading size="lg">{name}</Heading>
        <Link href={linkedin} isExternal ml={2}>
          <IconButton
            aria-label="LinkedIn Profile"
            icon={<FaLinkedin />}
            size="md"
            variant="ghost"
            colorScheme="blue"
          />
        </Link>
      </Flex>
      <Text textAlign="left" color={useColorModeValue('gray.600', 'gray.300')}>{bio}</Text>
    </Box>
  )
}

const About = () => {
  return (
    <Box minH="100vh" bgGradient={useColorModeValue('linear(to-b, teal.50, blue.50, white)', 'linear(to-b, teal.900, blue.900, gray.800)')} width="100%">
      {/* Our Team Header Section */}
      <Box py={16} width="100%">
        <Container maxW="container.xl" px={4}>
          <Stack spacing={8} textAlign="center" align="center">
            <Heading as="h1" size="2xl" bgGradient="linear(to-r, teal.400, blue.500, purple.600)" bgClip="text" fontWeight="extrabold">
              Where Common Ground Begins
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="800px">
            Meet the individual who planted the seeds for the DFW Common Ground community, bringing healthcare enthusiasts with a shared vision together.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Team Member Card Section */}
      <Box pb={16} width="100%">
        <Container maxW="container.xl" px={4}>
          <Flex justifyContent="center">
            {teamMembers.map((member, index) => (
              <Box key={index} w={{ base: '100%', md: '80%', lg: '60%' }}>
                <TeamMemberCard {...member} />
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default About 
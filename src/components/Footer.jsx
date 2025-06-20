import { Box, Container, Text, Link, Stack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgGradient="linear(to-b, teal.50, blue.50)" color="gray.700" mt={8}>
      <Container maxW="1200px" py={8}>
        <Stack spacing={4} align="center">
          <Text>© 2024 DFW Common Ground. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Link href="mailto:dfwcommonground@gmail.com" color="purple.600" _hover={{ color: 'purple.700' }}>Contact Us</Link>
          </Stack>
          <Text color="teal.600">
            Email: <a href="mailto:dfwcommonground@gmail.com" style={{ color: 'blue.500' }}>dfwcommonground@gmail.com</a>
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 
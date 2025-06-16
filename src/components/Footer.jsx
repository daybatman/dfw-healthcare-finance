import { Box, Container, Text, Link, Stack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgGradient="linear(to-b, teal.50, blue.50)" color="gray.700" mt={8}>
      <Container maxW="1200px" py={8}>
        <Stack spacing={4} align="center">
          <Text>© 2024 DFW Healthcare Finance Connect. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Link href="/privacy" color="teal.600" _hover={{ color: 'teal.700' }}>Privacy Policy</Link>
            <Link href="/terms" color="blue.600" _hover={{ color: 'blue.700' }}>Terms of Service</Link>
            <Link href="mailto:dfwhealthcarefinanceconnect@gmail.com" color="purple.600" _hover={{ color: 'purple.700' }}>Contact Us</Link>
          </Stack>
          <Text color="teal.600">
            Email: <a href="mailto:dfwhealthcarefinanceconnect@gmail.com" style={{ color: 'blue.500' }}>dfwhealthcarefinanceconnect@gmail.com</a>
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 
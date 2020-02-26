import React from 'react'
import { Flex, Heading} from '@chakra-ui/core'

function Login() {
    return (
      <Flex w="100" h="80vh" align="center" justify="center">
        <Flex
          bg="tomato"
          w="80%"
          h="80%"
          p={4}
          color="white"
        >
          <Heading as="h2" size="xl">
            LOGIN
          </Heading>
        </Flex>
      </Flex>
    );
}

export default Login

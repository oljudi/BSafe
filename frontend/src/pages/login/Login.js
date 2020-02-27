import React from 'react'
import { Flex, Heading, Stack, InputGroup, InputLeftElement, Input, InputRightElement, Button} from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

    return (
      <Flex w="100" h="80vh" align="center" justify="center">
        <Flex bg="tomato" w="80%" h="80%" p={4}>
          <Stack>
          <Heading as="h2" size="xl">
            LOGIN
          </Heading>
            <InputGroup>
              <InputLeftElement
                children={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="1x"
                    color="gray"
                  />
                }
              />
              <Input type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <FontAwesomeIcon
                    icon={faKey}
                    size='1x'
                    color='gray'
                  />
                }
              />
              <Input type={show ? 'text' : 'password'} placeholder="Password" />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              variantColor='red'
            >
              Login
            </Button>
            <p>Not an account yer? - <Link to='/signup' >SignUp</Link> </p>
          </Stack>
        </Flex>
      </Flex>
    );
}

export default Login

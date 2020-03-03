import React, { useContext } from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  useToast,
  FormControl,
  Text,
  Stack
} from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../context";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

function Login({history}) {
  const context = useContext(MyContext);
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const login = e => {
    context
      .handleLoginSubmit(e)
      .then(res => {
        history.push("/");
      })
      .catch(err => {
        toast({
          title: "Please, try again!",
          description:'Username or password Incorrect!!',
          status: "error"
        });
      });
  };

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            backgroundColor="#110D40"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Stack>
              <Form submit={login} bgColor="transparent" title="Login">
                <FormControl isRequired>
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
                    <Input
                      name="email"
                      value={context.state.formLogin.email}
                      onChange={context.handleLoginInput}
                      type="email"
                      placeholder="Email"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement
                      children={
                        <FontAwesomeIcon icon={faKey} size="1x" color="gray" />
                      }
                    />
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      value={context.state.formLogin.password}
                      onChange={context.handleLoginInput}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Form>
              <Text fontSize="sm" color="white">
                Don't have an account? - <Link to="/signup">Signup</Link>
              </Text>
            </Stack>
          </Flex>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Login;

import React, { useContext } from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormControl,
  useToast,
  FormLabel
} from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../context";
import Form from "../../components/Form";

function Signup({history}) {
  const context = useContext(MyContext);
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(res => {
        toast({
          title: "Congrats!!",
          description: "Your Account have been created sucessfully!",
          status: "success",
          duration: 5000,
          isClosable: true
        });
        // console.log(state)
        history.push('/login')
      })
      .catch(err => {
        console.log(err);
        toast({
          title: "ERROR",
          description: `We cannot create your account ${err}`
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
            <Form submit={submit} bgColor="transparent" title="SignUp">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <FontAwesomeIcon icon={faUser} size="1x" color="gray" />
                    }
                  />
                  <Input
                    name="name"
                    value={context.state.formSignup.name}
                    onChange={context.handleSignupInput}
                    type="text"
                    placeholder="Name"
                  />
                </InputGroup>
              </FormControl>
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
                    value={context.state.formSignup.email}
                    onChange={context.handleSignupInput}
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
                    value={context.state.formSignup.password}
                    onChange={context.handleSignupInput}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <Select
                  placeholder="Genre"
                  name="genre"
                  value={context.state.formSignup.genre}
                  onChange={context.handleSignupInput}
                >
                  <option value="M">M</option>
                  <option value="F">F</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white" htmlFor="age">
                  {" "}
                  Age{" "}
                </FormLabel>
                <Flex>
                  <Slider
                    id="age"
                    name="age"
                    value={context.state.formSignup.age}
                    onChange={context.handleInputNumber}
                  >
                    <SliderTrack />
                    <SliderFilledTrack />
                    <SliderThumb
                      fontSize="sm"
                      width="32px"
                      height="20px"
                      children={context.state.formSignup.age}
                    />
                  </Slider>
                </Flex>
              </FormControl>
            </Form>
          </Flex>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Signup;


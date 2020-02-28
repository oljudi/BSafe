import React, { useContext } from "react";
import {
  FormControl,
  Input,
  useToast,
  Flex,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/core";
import { MyContext } from "../../context";
import Form from "../../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact({history}) {
  const context = useContext(MyContext);
  const toast = useToast();

  const create = e => {
    context
      .handleContactSubmit(e)
      .then(res => {
        context.handleUpdateContacts().then().catch()
        toast({
          title: "Created",
          status: "success",
          duration: 5000,
          isClosable: true
        });
        history.push("/profile/contacts");
      })
      .catch(err => {
        toast({
          title: "Please, try again!",
          description: "Can't create contact",
          status: "error"
        });
      });
  }

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
            <Form
              submit={create}
              bgColor="transparent"
              title="Add safe contact"
            >
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <FontAwesomeIcon icon={faUser} size="1x" color="gray" />
                    }
                  />
                  <Input
                    name="name"
                    value={context.state.formContact.name}
                    onChange={context.handleContactInput}
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
                    value={context.state.formContact.email}
                    onChange={context.handleContactInput}
                    type="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <FontAwesomeIcon icon={faPhone} size="1x" color="gray" />
                    }
                  />
                  <Input
                    name="phone"
                    value={context.state.formContact.phone}
                    onChange={context.handleContactInput}
                    type="text"
                    placeholder="Phone Number"
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
        );
      }}
    </MyContext.Consumer>
  );
}

export default Contact;

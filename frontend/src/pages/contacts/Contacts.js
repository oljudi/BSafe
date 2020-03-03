import React, { useContext } from "react";
import { Stack, Heading, Button, Flex } from "@chakra-ui/core";
import ContactCard from "../../components/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

function Contacts({ history }) {
  const context = useContext(MyContext);
  const { contacts } = context.state;

  return (
    <MyContext.Consumer>
      {context => {
        const {
          isLogged
        } = context.state;
        if (isLogged)
          return (
            <Flex
              backgroundColor="#110D40"
              w="100vw"
              h="90vh"
              justify="center"
              color="white"
            >
              <Stack>
                <Heading as="h5" p={4}>
                  Safe Contacts
                </Heading>
                <Stack h='55vh' overflow='scroll'>
                {contacts.map((e,i) => {
                  return (
                    <ContactCard
                      key={i}
                      contact={e}
                    /> 
                  ) 
                })}
                </Stack>
                <br />
                <Flex justify="flex-end">
                  <Link to="/contact/new">
                    <Button
                      variantColor="red"
                      borderRadius="100px"
                      h="70px"
                      w="70px"
                    >
                      <FontAwesomeIcon icon={faPlus} size="2x" />
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </Flex>
          );
        else {
          history.push("/login");
        }
      }}
    </MyContext.Consumer>
  );
}

export default Contacts;

import React, { useContext } from "react";
import { Flex, Stack, Avatar, Heading, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

function Profile({ history }) {
  const context = useContext(MyContext);
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state;
        if (isLogged)
          return (
            <Flex
              backgroundColor="#110D40"
              w="100vw"
              h="90vh"
              align="center"
              justify="center"
              color="white"
            >
              <Stack align="center" justify="center">
                <Avatar
                  size="2xl"
                  name={loggedUser.name}
                  src={loggedUser.image}
                />
                <p>Name</p>
                <Heading as="h6">{loggedUser.name}</Heading>
                <p>Email</p>
                <Heading as="h6">{loggedUser.email}</Heading>
                <br />
                <Flex>
                  <Stack p={4}>
                    <p>Genre</p>
                    <Heading as="h6">{loggedUser.genre}</Heading>
                  </Stack>
                  <Stack p={4}>
                    <p>Age</p>
                    <Heading as="h6">{loggedUser.age}</Heading>
                  </Stack>
                </Flex>
                <br />
                <br />
                <Flex justify="space-evenly">
                  <Stack p={4}>
                    <Link to="/profile/places">
                      <Button variantColor="red">Places</Button>
                    </Link>
                  </Stack>
                  <Stack p={4}>
                    <Link to="/profile/contacts">
                      <Button variantColor="red">Contacts</Button>
                    </Link>
                  </Stack>
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

export default Profile;

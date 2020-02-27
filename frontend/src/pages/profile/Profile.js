import React from "react";
import { Flex, Stack, Avatar, Heading, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Flex w="100" h="80vh" align="center" justify="center">
      <Flex bg="tomato" w="80%" h="80%" p={4}>
        <Stack>
          <Avatar size="2xl" name="Dummy Avatar" src="" />
          <p>Name</p>
          <Heading as="h6">Dummy Name</Heading>
          <p>Email</p>
          <Heading as="h6">Dummy Email</Heading>
          <br />
          <Flex>
            <p>Genre</p>
            <Heading as="h6">Male</Heading>
            <p>Age</p>
            <Heading as="h6">26</Heading>
          </Flex>
          <br />
          <br />
          <Flex>
            <Link to="/profile/edit">
              <Button variantColor="red">Edit Profile</Button>
            </Link>
            <Link to="/profile/contacts">
              <Button variantColor="red">Contacts</Button>
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Profile;

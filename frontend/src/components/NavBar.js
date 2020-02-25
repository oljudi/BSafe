import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavLink exact to="/">
      <Flex
        w="100vw"
        h="10vh"
        px={5}
        bg="#313131"
        alignItems="center"
        justify="space-between"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <FontAwesomeIcon icon={faUserShield} size="2x" color="white" />
          <Heading px={3} color="white" as="h2" size="xl">
            BSafe
          </Heading>
        </Flex>
      </Flex>
    </NavLink>
  );
}

export default NavBar;

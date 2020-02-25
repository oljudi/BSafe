import React from "react";
import { Flex } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faUser,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Flex
      w="100vw"
      h="10vh"
      px={5}
      bg="#313131"
      alignItems="center"
      justify="space-between"
      bottom="0"
      position="fixed"
    >
      <Link to='/help' >
        <FontAwesomeIcon icon={faExclamationTriangle} size="2x" color="#CA3E47" />
      </Link>
      <Link to="/" >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="white" />
      </Link>
      <Link to="/profile" >
        <FontAwesomeIcon icon={faUser} size="2x" color="white" />
      </Link>
    </Flex>
  );
}

export default Footer;

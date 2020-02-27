import React from "react";
import { Box, Heading, Button } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ContactCard() {
  return (
    <>
      <Box bg="tomato" w="100%" p={4}>
        <Button variantColor='red'><FontAwesomeIcon icon={faMinus} size='1x'/></Button>
        <p>Name: </p> <Heading as="h5">Diego Olvera</Heading>
        <p>Email: </p> <Heading as="h5">correo@correo.com</Heading>
        <p>Phone: </p> <Heading as="h5">5554743476</Heading>
      </Box>
    </>
  );
}

export default ContactCard;

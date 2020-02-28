import React from "react";
import { Button, Flex, Text, Stack } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ContactCard({contact}) {
  return (
    <Stack bg="gray.800" w="400px" p={4} mb={3}>
      <Flex justify="flex-end">
        <Link to="/contact/delete">
          <Button variantColor="red" borderRadius="80px">
            <FontAwesomeIcon icon={faMinus} size="1x" />
          </Button>
        </Link>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Name: </Text>
        <Text fontSize="2xl" ml={8}>
          {contact.name}
        </Text>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Email: </Text>
        <Text fontSize="2xl" ml={8}>
          {contact.email}
        </Text>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Phone: </Text>
        <Text fontSize="2xl" ml={8}>
          {contact.phone}
        </Text>
      </Flex>
    </Stack>
  );
}

export default ContactCard;

import React, { useContext } from "react";
import { Button, Flex, Text, Stack, useToast } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../context";

function ContactCard({ contact }) {
  const context = useContext(MyContext);
  const toast = useToast();

  const delContact = id => {
    context
      .handleDeleteContact(id)
      .then(res => {
        context
          .handleUpdateContacts()
          .then()
          .catch();
        toast({
          title: "Contact Deleted",
          status: "error"
        });
      })
      .catch(err => {
        toast({
          title: "Error",
          description: "Can't delete contact",
          status: "error"
        });
      });
  };

  return (
    <Stack bg="gray.800" w="400px" p={4} mb={3}>
      <Flex justify="flex-end">
        <Button
          variantColor="red"
          borderRadius="80px"
          onClick={() => delContact(contact._id)}
        >
          <FontAwesomeIcon icon={faMinus} size="1x" />
        </Button>
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

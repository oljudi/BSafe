import React, { useContext } from "react";
import { MyContext } from "../context";
import { useToast, Stack, Flex, Button, Text } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function PlaceCard({ place }) {
  const context = useContext(MyContext);
  const toast = useToast();

  const delPlace = id => {
    context
      .handleDeletePlace(id)
      .then(res => {
        context
          .handleUpdatePlaces()
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
          description: "Can't delete Place",
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
          onClick={() => delPlace(place._id)}
        >
          <FontAwesomeIcon icon={faMinus} size="1x" />
        </Button>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Name: </Text>
        <Text fontSize="2xl" ml={8}>
          {place.name}
        </Text>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Description: </Text>
        <Text fontSize="2xl" ml={8}>
          {place.description}
        </Text>
      </Flex>
      <Flex p={1}>
        <Text fontSize="lg">Address: </Text>
        <Text fontSize="2xl" ml={8}>
          {place.properties.address}
        </Text>
      </Flex>
    </Stack>
  );
}

export default PlaceCard;

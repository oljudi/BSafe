import React, { useContext } from "react";
import { MyContext } from "../../context";
import { Flex, Heading, Stack, Button } from "@chakra-ui/core";
import PlaceCard from "../../components/PlaceCard";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SafePlaces({ history }) {
  const context = useContext(MyContext);
  const { places } = context.state;
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged } = context.state;
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
                  Safe Places
                </Heading>
                <Stack h="55vh" w="90vw" overflow="scroll">
                  {places.map((e, i) => {
                    return <PlaceCard key={i} place={e} />;
                  })}
                </Stack>
                <br />
                <Flex justify="flex-end">
                  <Link to="/addPlaces">
                    <Button
                      variantColor="red"
                      borderRadius="100px"
                      h="70px"
                      w="70px"
                    >
                      <FontAwesomeIcon icon={faPlus} size="2x" />{" "}
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

export default SafePlaces;

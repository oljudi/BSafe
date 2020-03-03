import React, { useContext } from "react";
import { Flex, Button, Box, useToast } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faSignInAlt,
  faExclamationCircle,
  faEye,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

function Footer() {
  const context = useContext(MyContext);
  const toast = useToast();

  const sendHelpRequest = () => {
    context
      .handleHelpRequest()
      .then(res => {
        toast({
          title: "SMS Send",
          description:
            "Help Request sended to your safe contacts, please contact 911 for help",
          status: "success"
        });
      })
      .catch(err => {
        toast({
          title: "Error",
          description: "Can't send the sms, please contact 911 for help",
          status: "error"
        });
      });
  };

  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged } = context.state;
        if (isLogged)
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
              <Link to="/c5view">
                <FontAwesomeIcon icon={faEye} size="2x" color="white" />
              </Link>
              <Link to="/addPlaces">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  color="white"
                />
              </Link>
              <Box>
                <Button
                  variantColor="transparent"
                  onClick={() => sendHelpRequest()}
                >
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    size="3x"
                    color="#CA3E47"
                  />
                </Button>
              </Box>
            </Flex>
          );
        else {
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
              <Link to="/c5view">
                <FontAwesomeIcon icon={faEye} size="2x" color="white" />
              </Link>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} size="2x" color="white" />
              </Link>
            </Flex>
          );
        }
      }}
    </MyContext.Consumer>
  );
}

export default Footer;

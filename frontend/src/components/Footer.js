import React, { useContext } from "react";
import { Flex, Button, useToast, Text, Image } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

function Footer() {
  const context = useContext(MyContext);
  const toast = useToast();

  const sendHelpRequest = async () => {
    await navigator.geolocation.getCurrentPosition(pos => {
      const center = [pos.coords.longitude, pos.coords.latitude]
      context
        .handleHelpRequest(center)
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
    })
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
                <Image
                  size="50px"
                  objectFit="cover"
                  src="/images/cctv.png"
                  alt="Camera"
                />
                <Text fontSize="md" color="white">
                  C5 Cameras
                </Text>
              </Link>
              <Button
                variantColor="transparent"
                onClick={() => sendHelpRequest()}
              >
                <Image
                  size="50px"
                  objectFit="cover"
                  src="https://image.flaticon.com/icons/svg/595/595031.svg"
                  alt="Camera"
                />
              </Button>
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
                <Image
                  size="50px"
                  objectFit="cover"
                  src="/images/cctv.png"
                  alt="Camera"
                />
                <Text fontSize="md" color="white">
                  C5 Cameras
                </Text>
              </Link>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} size="2x" color="white" />
                <Text fontSize="md" color="white">
                  Login
                </Text>
              </Link>
            </Flex>
          );
        }
      }}
    </MyContext.Consumer>
  );
}

export default Footer;

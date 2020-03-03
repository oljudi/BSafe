import React, { useContext } from "react";
import {
  Flex,
  Heading,
  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Text,
  Stack,
  Avatar
} from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { NavLink, Link } from "react-router-dom";
import { MyContext } from "../context";

function NavBar() {
  const context = useContext(MyContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const logout = () => {
    context
      .handleLogOut()
      .then()
      .catch();
  };

  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state;
        if (isLogged)
          return (
              <Flex
                w="100"
                h="10vh"
                px={5}
                bg="#313131"
                alignItems="center"
                justify="space-between"
              >
                <NavLink exact to='/'>
                <Flex
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesomeIcon
                    icon={faUserShield}
                    size="2x"
                    color="white"
                  />
                  <Heading px={3} color="white" as="h2" size="xl">
                    BSafe
                  </Heading>
                </Flex>
                </NavLink>
                <Box>
                  <Button
                    ref={btnRef}
                    variantColor="transparent"
                    onClick={onOpen}
                  >
                    <FontAwesomeIcon icon={faBars} size="2x" color="#CA3E47" />
                  </Button>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>
                        <Stack isInline>
                          <Avatar
                            name={loggedUser.name}
                            src={loggedUser.image}
                          />
                        </Stack>
                      </DrawerHeader>

                      <DrawerBody>
                        <Link to="/profile">Profile</Link>
                        <br />
                        <br />
                        <Link to="/profile/contacts">My Safe Contacts</Link>
                        <br />
                        <br />
                        <Link to="/profile/places">My Safe Places</Link>
                        {/* TODO: Routes to app functionalities*/}
                      </DrawerBody>

                      <DrawerFooter>
                        <Text fontSize="md">
                          Ironhack WDFT 2020 - @oljudi
                          <FontAwesomeIcon icon={faGithub} />
                        </Text>
                        <Button
                          variant="outline"
                          variantColor="red"
                          mr={3}
                          onClick={logout}
                        >
                          LogOut
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </Box>
              </Flex>
          );
        else {
          return (
            <NavLink exact to="/">
              <Flex
                w="100"
                h="10vh"
                px={5}
                bg="#313131"
                alignItems="center"
                justify="space-between"
              >
                <Flex
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesomeIcon
                    icon={faUserShield}
                    size="2x"
                    color="white"
                  />
                  <Heading px={3} color="white" as="h2" size="xl">
                    BSafe
                  </Heading>
                </Flex>
              </Flex>
            </NavLink>
          );
        }
      }}
    </MyContext.Consumer>
  );
}

export default NavBar;

import React from "react";
import { Stack, Heading, Button } from "@chakra-ui/core";
import ContactCard from "../../components/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <Stack>
      <Heading as="h5">Safe Contacts</Heading>
      <ContactCard />
      <br />
      <Link to="/contact/new">
        <Button variantColor="red">
          <FontAwesomeIcon icon={faPlus} size="1x" />{" "}
        </Button>
      </Link>
    </Stack>
  );
}

export default Contacts;

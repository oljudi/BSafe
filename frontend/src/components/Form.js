import React from "react";
import { Box, Stack, Heading, Button} from "@chakra-ui/core";

function Form({ width, children, title, submit, bgColor }) {


  return (
    <Box
      backgroundColor={bgColor}
      onSubmit={submit}
      as="form"
      w={width || "350px"}
      boxShadow="x1"
    >
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1" color="white">
          {title}
        </Heading>
        {children}
        <Button backgroundColor="#CA3E47" type="submit" color="white">
          {title}
        </Button>
      </Stack>
    </Box>
  );
}

export default Form;

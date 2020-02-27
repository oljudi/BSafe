import React from "react";
import { Box, Stack, Heading, Button, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

function Form({ width, children, title, submit, bgColor }) {
  
  const flag = () => {
    if(title === 'signup') return true
    return false
  }

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
        {flag && (
          <Text fontSize="sm" color="white">
            Already an account? - <Link to="/login">Login</Link>
          </Text>
        )}
        {!flag && (
          <Text fontSize="sm" color="white">
            Not an account? - <Link to="/signup">Register here!</Link>
          </Text>
        )}
      </Stack>
    </Box>
  );
}

export default Form;

import { Button, Heading, Input, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Stack h={"50vh"} my={"20"} alignItems={"center"} justifyContent={"center"}>
      <form>
        <VStack w="full" width={"xs"} alignItems={"center"} mx={2}>
          <Heading my={"5"}>Welcome Back </Heading>
          <Input type={"text"} placeholder="Enter UserID" required />
          <Input type={"password"} placeholder="Enter password" required />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to="/forgetPass">forget password?</Link>
          </Button>
          <Button
            variant={"solid"}
            w={"full"}
            colorScheme={"purple"}
            type={"submit"}
          >
            SignIn
          </Button>

          <Text textAlign={"right"} w={"full"}>
            New User?
            <Button variant={"link"}>
              <Link to="/signup">SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Stack>
  );
};

export default SignIn;

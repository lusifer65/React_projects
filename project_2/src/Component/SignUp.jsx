import React from "react";
import { Button, Heading, Input, Stack, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Stack h={"50vh"} my={"20"} alignItems={"center"} justifyContent={"center"}>
      <form>
        <VStack w="full" width={"xs"} alignItems={"center"} mx={2}>
          <Heading my={"5"}>Sign Up</Heading>
          <Input type={"text"} placeholder="Enter Your Lucky Name" required />
          <Input type={"tel"} placeholder={"Enter Mobile No."} required />
          <Input type={"text"} placeholder="Enter password" required />
          <Input type={"password"} placeholder="Confirm password" required />
          <Button type={"submit"} variant={"solid"} colorScheme={"purple"} w={"full"}>
            SignUp
          </Button>
          <Text textAlign={"right"} w={"full"}>
            Already User?
            <Button variant={"link"}>
              <Link to="/signin">SignIn</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Stack>
  );
};

export default SignUp;

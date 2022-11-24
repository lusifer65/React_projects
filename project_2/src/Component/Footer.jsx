import {
  Box,
  Heading,
  HStack,
  Stack,
  Input,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      
      minH={"40"}
      bgColor={"blackAlpha.900"}
      p={"16"}
      color={"white"}
    >
      <Stack direction={["column", "row"]}>
        <VStack  w={"full"} p={"4"}>
          <Heading  textTransform={"uppercase"} size="md">
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder={"Enter Email here...."}
              borderRadius={"none"}
              focusBorderColor={"none"}
              border={"none"}
              outline={"none"}
            />
            <Button
              p={"0"}
              variant={"ghost"}
              colorScheme={"purple"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "2px solid white"]}
          borderRight={["none", "2px solid white"]}

        >
          <Heading textAlign={"center"}>Video Hub</Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={"full"} justifyContent={"center"}>
          <Heading>Social Media</Heading>
          <Button variant={"link"} colorScheme={"white"}>
            InstaGram
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            Twitter
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            Github
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
const Upload = () => {
  return (
    <Container maxW={"container.lg"} h={"100vh"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"} />
        <form>
          <HStack>
            <Input
              required
              type={"file"}
              border={"none"}
              css={{
                "&::file-selector-button": {
                  border: "none",
                  width: "calc(100% + 36px)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                  cursor: "pointer",
                  borderBottom: "3px solid purple",
                  borderRadius: "10px",
                },
              }}
            />
            <Button variant={"solid"} colorScheme={"purple"} type={"submit"}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;

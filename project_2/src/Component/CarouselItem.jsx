import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const CarouselItem = ({ data }) => {
  let Style = {
    pos: "absolute",
    top: "50%",
    left: "50%",
    p: "4",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    size: "3xl",
    fontFamily: "cursive",
  };
  return (
    <Box w="full" h={"100vh"}>
      <Image
        filter={"blur(0.5px)"}
        src={data.Img}
        alt="img"
        h={"full"}
        w={'full'}
        objectFit={"cover"}
      />
      <Heading bg={data.bg} color={data.color} {...Style}>
        {data.Heading}
      </Heading>
    </Box>
  );
};

export default CarouselItem;

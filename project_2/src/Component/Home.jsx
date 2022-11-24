import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../Assets/1.jpg";
import Img2 from "../Assets/2.jpg";
import Img3 from "../Assets/3.jpg";
import Img4 from "../Assets/4.jpg";
import Img5 from "../Assets/5.png";
import { Box, Container, Heading, Stack, Text,Image } from "@chakra-ui/react";
import CarouselItem from "./CarouselItem";

const Home = () => {
  let Img = [
    {
      Img: Img1,
      Heading: "Future Gaming",
      bg: "blackAlpha.600",
      color: "white",
    },
    {
      Img: Img2,
      Heading: "Future Gaming",
      bg: "whiteAlpha.600",
      color: "white",
    },
    {
      Img: Img3,
      Heading: "Caming Console",
      bg: "whiteAlpha.500",
      color: "white",
    },
    {
      Img: Img4,
      Heading: "Night life",
      bg: "blackAlpha.500",
      color: "white",
    },
  ];
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {Img.map((item, index) => {
          return <CarouselItem key={index + 1} data={item} />;
        })}
      </Carousel>
      <Container minH={"100vh"} p={16} maxW={"container.xl"}>
        <Heading
          w={"fit-content"}
          m={"auto"}
          py={"2"}
          borderBottom={"2px solid"}
        >
          Services
        </Heading>
        <Stack 
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={Img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
          lineHeight={"190%"} letterSpacing={"widest"} p={["4","16"]} alignItems={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint accusantium nihil aut dolor eaque rem, voluptatibus magnam
            architecto ratione enim et cupiditate recusandae doloremque officiis
            beatae ad. Quisquam eligendi inventore voluptas quaerat vel eum
            sapiente alias magnam quae minima! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Qui, sunt? Soluta eaque nemo quaerat,
            aut cum magni at est nulla!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
       zIndex={'overlay'}
        pos={"fixed"}
        top={"4"}
        left={'4'}
        p={'0'}
        w={'10'}
        h={"10"}
        colorScheme={"purple"}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton pos={"fixed"} top={4} right={4} />
          <DrawerHeader>Video Leraner</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                <Link to="/upload">Upload Videos</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack w={"full"} justifyContent={"space-evenly"}>
              <Button onClick={onClose} variant={"solid"} colorScheme={"purple"}>
                <Link to="/signin">Login</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"} colorScheme={"purple"}>
                <Link to="/signup">SignUp</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

import React from "react";
import { Flex, HStack, Text, Button, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link"

/**
 * Navigation Component
 */
function Nav() {
  return (
    <Flex
      flexDirection="row"
      px={5}
      justifyContent="space-between"
      alignItems="center"
    >
      <>
        <NextImage
          width="150px"
          height="80px"
          src="/zouk_studios_icon.svg"
          priority={true}
        />
      </>

      <HStack spacing={5}>
        <NextLink href='/'>
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href='/about'>
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            About Us
          </Button>
        </NextLink>
        <NextLink href='/bookings'>
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Bookings
          </Button>
        </NextLink>
        <NextLink href='/contact'>
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Contact Us!
          </Button>
        </NextLink>
        <Button
          bgColor="orange.300"
          color="white"
          _hover={{ bgColor: "orange.400" }}
          _active={{ bgColor: "orange.500" }}
        >
          Sign In
        </Button>
      </HStack>
    </Flex>
  );
}

export default Nav;

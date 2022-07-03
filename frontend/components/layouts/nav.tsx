import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";

/**
 * Navigation Component
 */
function Nav() {
  return (
    <Flex flexDirection="row" px={5} justifyContent="space-between" bgColor='gray'>
      <>
        <Text>Logo Goes Here</Text>
      </>

      <HStack>
        <Text>Home</Text>
        <Text>About Us</Text>
        <Text>Bookings</Text>
        <Text>Contact Us!</Text>
      </HStack>
    </Flex>
  );
}

export default Nav;

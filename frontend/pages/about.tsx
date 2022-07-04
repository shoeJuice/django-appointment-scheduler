import React from "react";
import { Text, Flex, Divider, Box, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/Head";

import Main from "../components/layouts/main";
import ContactCard from "../components/ContactCard";

const AboutPage: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>About - Zouk Studios</title>
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#2D3748"
        px={40}
        pt={10}
        pb={100}
        borderRadius={10}
        boxShadow='dark lg'
      >
        <Flex textAlign="center" flexDirection="column">
          <Text fontSize="6xl" fontWeight="medium" color="white">
            About Us
          </Text>
          <Divider width="400px" />
        </Flex>
        <Text pt={10} color="white" width="504px" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Box
            textAlign="center"
        >
          <Text pt={10} fontWeight="medium" fontSize="4xl" color="white">
            Meet the Team
          </Text>
          <Divider width="400px" />
        </Box>
        <HStack pt={6} spacing={7}>
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </HStack>
      </Flex>
    </Main>
  );
};

export default AboutPage;

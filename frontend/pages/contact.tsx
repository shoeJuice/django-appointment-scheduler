import React from "react";
import { Text, Flex, Divider, Box, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/Head";

import Main from "../components/layouts/main";
import ContactForm from "../components/ContactForm";


const ContactPage: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Contact - Zouk Studios</title>
        <link rel="icon" href="/zouk_studios_icon_alt.ico" />
      </Head>
      <Flex
        marginY='auto'
        flexDirection="column"
        alignItems="center"
        py={10}
        px={20}
        borderRadius={8}
        boxShadow='dark lg'
      >
        <Text
          color="white"
          mb={10}
          fontSize="4xl"
          fontWeight="medium"
          lineHeight={10}
        >
          Contact Us
        </Text>
        <Text
          color="white"
          mb={10}
          fontSize="sm"
          lineHeight={5}
          textAlign="center"
        >
          Interested? Let’s get in touch! Fill out the form below and a
          representative will reach out shortly.
        </Text>
        <ContactForm width="100%" />
      </Flex>
    </Main>
  );
};

export default ContactPage;

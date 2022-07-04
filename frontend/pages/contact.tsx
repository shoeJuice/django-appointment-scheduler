import React from "react";
import { Text, Flex, Divider, Box, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/Head";

import Main from "../components/layouts/main";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Animate from "../components/layouts/Animate";

const ContactPage: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Contact - Zouk Studios</title>
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#2D3748"
        px={40}
        pt={10}
        pb={100}
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

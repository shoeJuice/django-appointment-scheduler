import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import Head from "next/Head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Animate from "../../components/project/layouts/Animate";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import AuthContext from "../../context/AuthContext";
import Layout from "../../components/project/layouts/main";
import NextLink from 'next/link'

const SignIn: NextPage = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const { login } = useContext<any>(AuthContext);

  const loginHandler = () => {
    login({ email, password });
  };

  return (
    <Layout>
      <Head>
        <title>Sign In - Zouk Studios</title>
        <link rel="icon" href="/zouk_studios_icon_alt.ico" />
      </Head>
      <Text
        color='white'
        fontSize='4xl'
        fontWeight='medium'
        mb={4}
      >
        Sign In
      </Text>
      <Flex
        flexDirection="column"
        backgroundColor="gray.600"
        padding={10}
        borderRadius={10}
      >
        <FormControl>
          <FormLabel color="white">E-Mail Address</FormLabel>
          <Input
            placeholder="E-Mail Address"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormLabel color="white">Password</FormLabel>
          <Input
            placeholder="Password"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </FormControl>
        <Button
          marginTop={6}
          onClick={() => {
            const loginInfo = { email, password };
            loginHandler();
          }}
        >
          Log In
        </Button>
        <NextLink href='/auth/register'>
          <Link mt={5} color='white'>Don&apost have an account? Click here to register.</Link>
        </NextLink>
      </Flex>
    </Layout>
  );
};

export default SignIn;

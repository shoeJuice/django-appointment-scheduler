import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import Head from "next/Head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Animate from "../../components/layouts/Animate";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import AuthContext from "../../context/AuthContext";
import Layout from "../../components/layouts/main";
import axios from "axios";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";

interface RegisterInfo {
  email?: String;
  password?: String;
  first_name?: String;
  last_name?: String;
  username?: String;
}

const RegisterForm: NextPage = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [first_name, setFirstName] = useState<String>("");
  const [last_name, setLastName] = useState<String>("");
  const [username, setUsername] = useState<String>("");

  const router = useRouter();

  const { register } = useContext<any>(AuthContext);

  const registerHandler = () => {
    register({ username, email, password, first_name, last_name });
  };

  return (
    <Layout>
      <Head>
        <title>Register - Zouk Studios</title>
        <link rel="icon" href="/zouk_studios_icon_alt.ico" />
      </Head>
      <Text
        color='white'
        fontSize='4xl'
        fontWeight='medium'
        mb={4}
      >
        Register
      </Text>
      <Flex
        flexDirection="column"
        backgroundColor="gray.600"
        padding={10}
        borderRadius={10}
      >
        <FormControl>
          <FormLabel color="white">First Name</FormLabel>
          <Input
            placeholder="First Name"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <FormLabel color="white">Last Name</FormLabel>
          <Input
            placeholder="Last Name"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <FormLabel color="white">E-Mail Address</FormLabel>
          <Input
            placeholder="E-Mail Address"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormLabel color="white">Username</FormLabel>
          <Input
            placeholder="Username"
            backgroundColor="whiteAlpha.900"
            onChange={(e) => {
              setUsername(e.target.value);
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
            registerHandler();
          }}
        >
          Sign Up
        </Button>
      </Flex>
    </Layout>
  );
};

export default RegisterForm;

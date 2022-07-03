import { Box, Container } from "@chakra-ui/react";
import Head from "next/Head";
import Nav from './nav'

const Splash = ({ children, router }: any) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Django Appointment Scheduler App - Home</title>
      </Head>
      <Nav />
      <Container maxW="container.lg" pt={10}>
        {children}
      </Container>
    </Box>
  );
};

export default Splash;

import { Box, Container } from "@chakra-ui/react";
import Head from "next/Head";
import Nav from "./nav";

const Splash = ({ children, router }: any) => {
  return (
    <Box as="main" bgImage="url('/palm_splash.jpg')" backgroundColor='rgba(0,0,0,.60)' backgroundBlendMode='multiply' bgPosition='center' bgRepeat='no-repeat' bgSize='cover' minHeight="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Container maxW="container.lg" pt={10}>
        {children}
      </Container>
    </Box>
  );
};

export default Splash;

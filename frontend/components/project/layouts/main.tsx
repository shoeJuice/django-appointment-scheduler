import { Box, Container } from "@chakra-ui/react";
import Head from "next/Head";
import Nav from "./nav";
import Animate from "./Animate";
import { AuthProvider } from "../../../context/AuthContext";

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <Animate>
        <Container maxW="container.md" pt={10}>
          {children}
        </Container>
      </Animate>
    </Box>
  );
};

export default Main;

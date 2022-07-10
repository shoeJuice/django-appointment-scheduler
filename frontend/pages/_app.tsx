import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/project/layouts/main_lg";
import Animate from "../components/project/layouts/Animate";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

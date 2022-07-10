import React, { useContext } from "react";
import { Flex, HStack, Text, Button, Image, IconButton } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import AuthContext from "../../context/AuthContext";
import ZoukStudiosIcon from "../ZoukStudiosIcon";

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

// import logout from "../../pages/api/logout";
/**
 * Navigation Component
 */
function Nav() {
  // @ts-ignore
  const { user, logout } = useContext<any>(AuthContext);

  const handleLogout = async (e: ButtonEvent) => {
    e.preventDefault();
    await logout();
  };

  return (
    <Flex
      flexDirection="row"
      px={5}
      justifyContent="space-between"
      alignItems="center"
    >
      <NextLink href={"/"}>
        <IconButton size='xs' icon={<ZoukStudiosIcon boxSize='10em' />} aria-label="Zouk-Studios-Icon" variant='link'/>
      </NextLink>

      <HStack spacing={5}>
        <NextLink href="/">
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/about">
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            About Us
          </Button>
        </NextLink>
        <NextLink href="/bookings">
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Bookings
          </Button>
        </NextLink>
        <NextLink href="/contact">
          <Button
            variant="link"
            color="white"
            _hover={{ color: "orange.400" }}
            _active={{ color: "orange.500" }}
          >
            Contact Us!
          </Button>
        </NextLink>
        {user ? (
          <Text color="white">Logged in as {user.username} </Text>
        ) : (
          <></>
        )}
        <NextLink href={"/auth/signin"}>
          <Button
            bgColor="orange.300"
            color="white"
            _hover={{ bgColor: "orange.400" }}
            _active={{ bgColor: "orange.500" }}
            onClick={(e) => {
              user ? handleLogout(e) : console.log("To login..");
            }}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </NextLink>
      </HStack>
    </Flex>
  );
}

export default Nav;

import React from "react";
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
  Avatar,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/react";

function ContactCard() {
  return (
    <Box
        bgColor={'gray.600'}
        width='190px'
        padding={2}
        borderRadius={4}
    >
      <HStack>
        <Avatar />
        <Box>
          <Text fontSize='sm' color='white' fontWeight='medium' lineHeight={5}>Harold Jenkins</Text>
          <Text fontSize='sm' color='white' lineHeight={4}>Lead Designer</Text>
        </Box>
      </HStack>
      <Divider mt={2} />
      <Text fontSize='sm' pt={3} color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
    </Box>
  );
}

export default ContactCard;

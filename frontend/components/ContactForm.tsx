import React, { useState } from "react";
import axios from "axios";
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
} from "@chakra-ui/react";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

/**
 * Main Functional Component for handling Contact Forms
 */

type ContactFormProps = {
  width?: number | "px" | string;
};

type GuestMessage = {
  sender_first_name: String,
  sender_last_name: String,
  sender_email_address: String,
  sender_phone_number: String,
  inquiry_description: String,
}

function ContactForm({ width }: ContactFormProps) {
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [emailAddress, setEmailAddress] = useState<String>("");
  const [telephoneAddress, setTelephoneAddress] = useState<String>("");
  const [message, setMessage] = useState<String>("");

  const handleSubmit = (item : GuestMessage) => {
    axios.post("http://localhost:8000/api/inquiries/", item).then(({ status }) => {
      if (status === 200 || status === 203 || status === 201) {
        console.log("Post Successful");
      } else {
        console.log("Post didn't go through. Status Code:", status);
      }
    });
  };

  return (
    <Flex
      backgroundColor="gray.600"
      padding={7}
      width={width}
      borderRadius={8}
      flexDirection="column"
      alignItems="flex-end"
    >
      <FormControl>
        <FormLabel
          color="gray.50"
          htmlFor="fname"
          data-testid="first_name_label"
        >
          First Name
        </FormLabel>
        <Input
          backgroundColor="white"
          placeholder="First Name"
          id="fname"
          data-testid="fname_input"
          onChange={(e) => (setFirstName(e.target.value))}
        />
        <FormLabel
          color="gray.50"
          htmlFor="lname"
          data-testid="last_name_label"
        >
          Last Name
        </FormLabel>
        <Input
          backgroundColor="white"
          id="lname"
          placeholder="Last Name"
          data-testid="lname_input"
          onChange={(e) => (setLastName(e.target.value))}
        />
        <FormLabel
          color="gray.50"
          htmlFor="email"
          data-testid="email_address_label"
        >
          Email Address
        </FormLabel>
        <Input
          backgroundColor="white"
          id="email"
          type="email"
          data-testid="email_input"
          placeholder="E-mail Address"
          onChange={(e) => (setEmailAddress(e.target.value))}
        />
        <FormLabel
          color="gray.50"
          htmlFor="telephone"
          data-testid="telephone_label"
        >
          Telephone
        </FormLabel>
        <Input
          backgroundColor="white"
          id="telephone"
          type="tel"
          data-testid="tel_input"
          placeholder="+1"
          onChange={(e) => (setTelephoneAddress(e.target.value))}
        />
        <FormLabel
          color="gray.50"
          htmlFor="message"
          data-testid="message_label"
        >
          Message
        </FormLabel>
        <Textarea
          backgroundColor="white"
          id="message"
          data-testid="message_input"
          placeholder="Leave a message.."
          onChange={(e) => (setMessage(e.target.value))}
        />
      </FormControl>
      <Button
        mt={10}
        bgColor="orange.300"
        color="white"
        _hover={{ bgColor: "orange.400" }}
        _active={{ bgColor: "orange.500" }}
        type="submit"
        onClick={() => {
          const contactMessage : GuestMessage = {
            sender_first_name: firstName,
            sender_last_name: lastName,
            sender_email_address: emailAddress,
            sender_phone_number: telephoneAddress,
            inquiry_description: message,
          };
          console.log(contactMessage)
          handleSubmit(contactMessage);
        }}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default ContactForm;

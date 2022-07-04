import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactForm from "../components/ContactForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ContactForm",
  component: ContactForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ContactForm>;

export const Navigation = () => <ContactForm />;

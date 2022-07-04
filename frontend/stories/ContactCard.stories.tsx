import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactCard from "../components/ContactCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ContactCard",
  component: ContactCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ContactCard>;

export const Navigation = () => <ContactCard />;

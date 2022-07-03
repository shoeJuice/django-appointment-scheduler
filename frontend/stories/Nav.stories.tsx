import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from '../components/layouts/nav'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Nav',
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Nav>;

export const Navigation = () => <Nav />
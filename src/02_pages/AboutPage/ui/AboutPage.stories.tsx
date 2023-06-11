import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  ThemeDecorator,
} from '06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '06_shared/contexts/ThemeContext';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => (
  <AboutPage />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

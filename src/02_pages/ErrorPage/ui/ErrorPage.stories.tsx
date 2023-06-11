import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  ThemeDecorator,
} from '06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '06_shared/contexts/ThemeContext';
import ErrorPage from './ErrorPage';

export default {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = () => (
  <ErrorPage />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

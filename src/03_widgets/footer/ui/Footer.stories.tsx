import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  ThemeDecorator,
} from '06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '06_shared/contexts/ThemeContext';
import { Footer } from './Footer';

export default {
  title: 'widget/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

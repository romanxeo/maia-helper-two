import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  ThemeDecorator,
} from '06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '06_shared/contexts/ThemeContext';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
  <Sidebar />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

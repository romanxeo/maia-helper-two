import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import {
  ThemeDecorator,
} from '06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '06_shared/contexts/ThemeContext';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});

export const Clear = Template.bind({});
Clear.args = {
  variant: 'clear',
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  variant: 'background',
};

export const Inventered = Template.bind({});
Inventered.args = {
  variant: 'inverted',
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  size: 's',
};

export const ButtonMedium = Template.bind({});
ButtonMedium.args = {
  size: 'm',
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  size: 'l',
};

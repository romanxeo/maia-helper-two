import type { Preview } from '@storybook/react';
import {
  ThemeDecorator,
} from '../../src/06_shared/config/stotybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/06_shared/contexts/ThemeContext';
import {
  StyleDecorator,
} from '../../src/06_shared/config/stotybook/StyleDecorator/StyleDecorator';
import {
  RouterDecorator,
} from '../../src/06_shared/config/stotybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StyleDecorator(),
    RouterDecorator(),
  ],
};

export default preview;

import '01_app/styles/index.scss';
import { Story, Decorator } from '@storybook/react';
import { Theme } from '06_shared/contexts/ThemeContext';
import { ThemeProvider } from '01_app/providers/themeProvider';

export const ThemeDecorator = (
  theme: Theme,
): Decorator => (
  StoryComponent: Story,
) => (
  <div className={`app ${theme}`}>
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  </div>
);

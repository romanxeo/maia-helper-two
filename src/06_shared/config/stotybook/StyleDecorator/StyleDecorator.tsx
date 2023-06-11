import '01_app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = () => (StoryComponent: Story) => (
  <StoryComponent />
);

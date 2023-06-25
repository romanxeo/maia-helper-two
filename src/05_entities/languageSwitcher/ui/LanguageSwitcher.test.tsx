import { screen } from '@testing-library/react';
import {
  RenderComponent,
} from '06_shared/config/jest/renderComponent/RenderComponent';
import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  test('just test LanguageSwitcher', () => {
    RenderComponent(<LanguageSwitcher />);
    expect(screen.getByTestId('LanguageSwitcher')).toBeInTheDocument();
  });
});

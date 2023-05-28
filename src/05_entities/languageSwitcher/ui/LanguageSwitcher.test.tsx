import { screen } from '@testing-library/react';
import {
  RenderWithTranslation,
} from '06_shared/helpers/renderWithTranslation/RenderWithTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  test('just test LanguageSwitcher', () => {
    RenderWithTranslation(<LanguageSwitcher />);
    expect(screen.getByTestId('LanguageSwitcher')).toBeInTheDocument();
  });
});

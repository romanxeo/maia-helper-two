import { screen } from '@testing-library/react';
import {
  RenderWithTranslation,
} from '06_shared/helpers/renderWithTranslation/RenderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('just test button', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});

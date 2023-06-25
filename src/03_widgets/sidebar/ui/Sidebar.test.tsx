import { screen } from '@testing-library/react';
import {
  RenderComponent,
} from '06_shared/config/jest/renderComponent/RenderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('just test sidebar', () => {
    RenderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});

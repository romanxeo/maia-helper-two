import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('just test button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('just test button with variant', () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});

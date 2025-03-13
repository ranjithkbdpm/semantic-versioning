import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is an example of how to configure semantic release/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

test('renders button with correct text', () => {
  render(<Button>Click Me</Button>);
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const button = screen.getByText('Click Me');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

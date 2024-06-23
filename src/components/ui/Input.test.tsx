import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

test('renders input with correct value', () => {
  render(<Input id="test-input" type="text" value="Test" onChange={() => {}} />);
  const input = screen.getByDisplayValue('Test');
  expect(input).toBeInTheDocument();
});

test('calls onChange handler when input changes', () => {
  const handleChange = jest.fn();
  render(<Input id="test-input" type="text" value="Test" onChange={handleChange} />);
  const input = screen.getByDisplayValue('Test');
  fireEvent.change(input, { target: { value: 'Changed' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

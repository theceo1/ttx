// src/components/ui/Input.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import '@testing-library/jest-dom';

test('renders input with correct value', () => {
  const handleChange = jest.fn();
  render(<Input id="test-input" type="text" value="Test" onChange={handleChange} />);
  const input = screen.getByDisplayValue('Test');
  expect(input).toBeInTheDocument();
});

test('calls onChange handler when input changes', () => {
  const handleChange = jest.fn();
  render(<Input id="test-input" type="text" value="Test" onChange={handleChange} />);
  const input = screen.getByDisplayValue('Test');
  fireEvent.change(input, { target: { value: 'New Value' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

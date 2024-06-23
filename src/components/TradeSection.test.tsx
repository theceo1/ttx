// src/components/TradeSection.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TradeSection from './TradeSection';

test('handles invalid input gracefully', () => {
  render(<TradeSection />);
  const input = screen.getByPlaceholderText('Enter amount');
  fireEvent.change(input, { target: { value: '' } });
  const placeOrderButton = screen.getByText('Place Order');
  fireEvent.click(placeOrderButton);

  const errorMessage = screen.getByText(/Invalid amount entered/i);
  expect(errorMessage).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TradeSection from './TradeSection';
import '@testing-library/jest-dom'; // Ensure this is imported

test('renders trade section with buy and sell buttons', () => {
  render(<TradeSection />);
  
  const buyButton = screen.getByText(/Buy/i);
  const sellButton = screen.getByText(/Sell/i);

  expect(buyButton).toBeInTheDocument();
  expect(sellButton).toBeInTheDocument();
});

test('allows selecting coin and entering amount', () => {
  render(<TradeSection />);

  const selectCoin = screen.getByText(/Select Coin/i);
  fireEvent.click(selectCoin);

  const bitcoinOption = screen.getByText(/Bitcoin \(BTC\)/i);
  fireEvent.click(bitcoinOption);

  const amountInput = screen.getByPlaceholderText(/Enter amount/i);
  fireEvent.change(amountInput, { target: { value: '1.5' } });

  expect(amountInput).toHaveValue('1.5');
});

test('handles trade button click', () => {
  render(<TradeSection />);

  const placeOrderButton = screen.getByText(/Place Order/i);
  fireEvent.click(placeOrderButton);

  // Add any assertions based on the handleTrade logic
});

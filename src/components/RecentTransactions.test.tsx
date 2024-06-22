import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentTransactions from './RecentTransactions';
import { GlobalProvider } from '@/context/GlobalState';
import '@testing-library/jest-dom';

jest.mock('@/context/GlobalState', () => ({
  useGlobalState: () => ({
    recentTransactions: [
      { id: 1, type: 'Bought', coin: 'BTC', amount: 0.5, value: 20000 },
      { id: 2, type: 'Sold', coin: 'ETH', amount: 1.2, value: 1500 },
    ],
  }),
}));

test('renders recent transactions', () => {
  render(
    <GlobalProvider>
      <RecentTransactions />
    </GlobalProvider>
  );

  const transactions = screen.getAllByText(/(Bought|Sold)/);
  expect(transactions[0]).toBeInTheDocument();
  expect(transactions[1]).toBeInTheDocument();
});

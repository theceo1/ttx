import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentTransactions from './RecentTransactions';
import { GlobalProvider } from '@/context/GlobalState';

test('displays fallback text when no transactions exist', () => {
  render(
    <GlobalProvider>
      <RecentTransactions transactions={[]} />
    </GlobalProvider>
  );
  const fallbackText = screen.getByText(/No recent transactions found/i);
  expect(fallbackText).toBeInTheDocument();
});

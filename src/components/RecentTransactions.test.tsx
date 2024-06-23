import React from 'react';
import { render, screen } from '@testing-library/react';
import { GlobalProvider } from '../context/GlobalState';
import RecentTransactions from './RecentTransactions';
import '@testing-library/jest-dom';

describe('RecentTransactions', () => {
  test('renders recent transactions', () => {
    render(
      <GlobalProvider>
        <RecentTransactions />
      </GlobalProvider>
    );

    const cardTitle = screen.getByText(/Recent Transactions/i);
    expect(cardTitle).toBeInTheDocument();
  });
});

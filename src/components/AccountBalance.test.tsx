import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AccountBalance from './AccountBalance';
import '@testing-library/jest-dom'; // Ensure this is imported

jest.mock('../utils/api', () => ({
  fetchAccountBalance: jest.fn().mockResolvedValue(12345.67),
}));

test('renders account balance', async () => {
  render(<AccountBalance />);
  await waitFor(() =>
    expect(screen.getByText('$12345.67')).toBeInTheDocument(),
  );
});

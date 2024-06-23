import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SessionProvider } from 'next-auth/react';
import Home from '../pages/index'; // Adjust the import path as necessary

test('renders a heading', () => {
  render(
    <SessionProvider session={null}>
      <Home />
    </SessionProvider>
  );
  const heading = screen.getByRole('heading', { name: /trustBank/i });
  expect(heading).toBeInTheDocument();
});

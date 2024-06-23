// src/__tests__/index.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <SessionProvider session={null}>
        <Home />
      </SessionProvider>,
    );
    const heading = screen.getByRole('heading', {
      name: /trustBank/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

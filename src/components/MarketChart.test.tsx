import React from 'react';
import { render } from '@testing-library/react';
import MarketChart from './MarketChart';
import '@testing-library/jest-dom';

test('renders market chart', () => {
  const { container } = render(<MarketChart />);

  const canvas = container.querySelector('canvas');
  expect(canvas).toBeInTheDocument();
});

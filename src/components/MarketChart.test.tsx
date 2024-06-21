import React from 'react';
import { render } from '@testing-library/react';
import MarketChart from './MarketChart';
import '@testing-library/jest-dom'; // Ensure this is imported

test('renders market chart', () => {
  const { container } = render(<MarketChart />);
  
  const canvas = container.querySelector('canvas');
  expect(canvas).toBeInTheDocument();
});

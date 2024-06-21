import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom'; // Ensure this is imported
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('renders notifications', async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      { id: 1, message: 'Notification 1', timestamp: '2021-10-01T12:00:00Z' },
      { id: 2, message: 'Notification 2', timestamp: '2021-10-02T12:00:00Z' },
    ],
  });

  render(<Notifications />);

  const notificationMessage = await screen.findByText(/Notification 1/i);
  expect(notificationMessage).toBeInTheDocument();

  const notificationTimestamp = screen.getByText(/2021-10-01T12:00:00Z/i);
  expect(notificationTimestamp).toBeInTheDocument();
});

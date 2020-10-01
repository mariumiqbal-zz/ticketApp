import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ticket Description/i);
  const createTicketElement = getByText(/Create Ticket/i);
  expect(linkElement).toBeInTheDocument();
  expect(createTicketElement).toBeInTheDocument();
});

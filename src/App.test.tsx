import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe("Main App", () => {
  test('Should Render Hello World', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
})


import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter'; // Adjust the path as per your project structure

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countDisplay.textContent).toBe('1');

  fireEvent.click(incrementButton);
  expect(countDisplay.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countDisplay.textContent).toBe('-1');

  fireEvent.click(decrementButton);
  expect(countDisplay.textContent).toBe('-2');
});
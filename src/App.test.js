import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Change bg color button work properly', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	expect(button).toHaveStyle({ backgroundColor: 'red' });
	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
	expect(button.textContent).toBe('Change to red');
});

test('Check whether initially button is enabled and checkbox is unchecked', () => {
	render(<App />);
	const button = screen.getByRole('button');
	expect(button).toBeEnabled();
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('Click checkbox and button is disabled', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const button = screen.getByRole('button');
	fireEvent.click(checkbox);
	expect(checkbox).toBeChecked();
	expect(button).toBeDisabled();
	// click again and the button should be enabled
	fireEvent.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeEnabled();
});

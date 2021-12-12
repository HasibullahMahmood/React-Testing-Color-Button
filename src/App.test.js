import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpace } from './App';

test('Change bg color button work properly', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
	expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
	// expect( button.textContent ).toBe( 'Change to Medium Violet Red' );
	expect(button).toHaveTextContent('Change to Medium Violet Red');
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
	expect(button).toHaveStyle('backgroundColor: gray');
	// click again and the button should be enabled
	fireEvent.click(checkbox);
	expect(checkbox).not.toBeChecked();
	expect(button).toBeEnabled();
	expect(button).not.toHaveStyle('backgroundColor: gray');
});

describe('Replace camel with space works', () => {
	test('Single word camel case works', () => {
		expect(replaceCamelWithSpace('Red')).toBe('Red');
	});

	test('Two word camel case to space works', () => {
		expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
	});

	test('Multi word camel case to space works', () => {
		expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
	});
});

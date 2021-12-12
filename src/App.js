import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpace = (stringVariable) => {
	return stringVariable.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
	const [isPrimaryColor, setIsPrimaryColor] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	let backgroundColor = isPrimaryColor ? 'MediumVioletRed' : 'MidnightBlue';
	backgroundColor = isChecked ? 'gray' : backgroundColor;
	return (
		<div>
			<button
				style={{ backgroundColor }}
				onClick={() => {
					setIsPrimaryColor((prevState) => !prevState);
				}}
				disabled={isChecked}
			>
				{isPrimaryColor
					? `Change to ${replaceCamelWithSpace('MidnightBlue')}`
					: `Change to ${replaceCamelWithSpace('MediumVioletRed')}`}
			</button>
			<input
				type="checkbox"
				id="disable-button"
				value={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
			/>
			<label htmlFor="disable-button">Disable button</label>
		</div>
	);
}

export default App;

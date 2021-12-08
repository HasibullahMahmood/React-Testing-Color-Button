import { useState } from 'react';
import './App.css';

function App() {
	const [isRed, setIsRed] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div>
			<button
				style={{ backgroundColor: isRed ? 'red' : 'blue' }}
				onClick={() => {
					setIsRed((prevState) => !prevState);
				}}
				disabled={isChecked}
			>
				{isRed ? 'Change to blue' : 'Change to red'}
			</button>
			<input type="checkbox" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
		</div>
	);
}

export default App;

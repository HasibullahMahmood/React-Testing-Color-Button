import { useState } from 'react';
import './App.css';

function App() {
	const [isRed, setIsRed] = useState(true);

	return (
		<div>
			<button
				style={{ backgroundColor: isRed ? 'red' : 'blue' }}
				onClick={() => {
					setIsRed((prevState) => !prevState);
				}}
			>
				{isRed ? 'Change to blue' : 'Change to red'}
			</button>
		</div>
	);
}

export default App;

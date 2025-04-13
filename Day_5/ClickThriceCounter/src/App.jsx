import { useState } from "react";
import "./App.css";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={() => {
						setNumber(prev => prev + 1);
						setNumber(prev => prev + 1);
						setNumber(prev => prev + 1);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}

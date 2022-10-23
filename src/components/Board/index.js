import React, { useState } from "react";

import "./index.css";
import DynamicIsland from "../DynamicIsland";

const Board = () => {
	const [numGuesses, setNumGuesses] = useState(1);

	const enterHandler = (data) => {
		if (data && numGuesses < 7) {
			setNumGuesses(numGuesses + 1);
		} else if (numGuesses === 7) {
			alert("Sorry, you lost. Better luck next time!");
		}
	};

	return (
		<div className="island-container">
			{Array(numGuesses).fill(<DynamicIsland enterPressed={enterHandler} />)}
		</div>
	);
};

export default Board;

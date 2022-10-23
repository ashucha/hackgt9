import React, { useEffect, useRef, useState } from "react";

import { Col, Container, Row } from "reactstrap";

import "./index.css";
import DynamicIsland from "./DynamicIsland";

const Board = () => {
	const [numGuesses, setNumGuesses] = useState(1);
	// const [islands, setIslands] = useState([]);

	const enterHandler = (data) => {
		if (data && numGuesses < 8) {
			setNumGuesses(numGuesses+1);
		}

		else if (numGuesses == 8) {
			alert('you lost')
		}
	}



	return (
		<div className="island-container">
				{Array(numGuesses).fill(<DynamicIsland enterPressed={enterHandler}/>)}
		</div>
	);
};

export default Board;

import React, { useState } from "react";

import Board from "../../components/Board";
import Keyboard from "../../components/Keyboard";

const Play = () => {
	const [onscreenInput, setOnscreenInput] = useState("");
	const [timestamp, setTimestamp] = useState(null);

	const getKey = (data) => {
		setOnscreenInput(data);
	};

	const getTimestamp = (ts) => {
		setTimestamp(ts);
	};

	return (
		<div>
			<h1>SOUNDLE</h1>
			<Board typedChar={onscreenInput} timestamp={timestamp} />
			<Keyboard keyPressed={getKey} timestamp={getTimestamp} />
		</div>
	);
};

export default Play;

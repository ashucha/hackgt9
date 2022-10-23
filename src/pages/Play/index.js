import React from "react";

import Board from "../../components/Board";
import Keyboard from "../../components/Keyboard";

const Play = () => {
	const getKey = (data) => {
	};

	return (
		<div>
			<h1>SOUNDLE</h1>
			<Board />
			<Keyboard keyPressed={getKey} />
		</div>
	);
};

export default Play;

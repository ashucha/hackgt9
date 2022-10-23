import React, { useState } from "react";

import Board from "../../components/Board";
import Keyboard from "../../components/Keyboard";

const Play = () => {
	const [onscreenInputData, setOnscreenInputData] = useState(null);

	const getKeyData = (data) => {
		if (data) {
			setOnscreenInputData(data);
		}
	};

	return (
		<div>
			<h1>SOUNDLE</h1>
			<Board typedCharData={onscreenInputData} />
			<Keyboard keyPressed={getKeyData} />
		</div>
	);
};

export default Play;

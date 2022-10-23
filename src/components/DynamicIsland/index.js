import React, { useEffect, useRef, useState } from "react";

import "./index.css";
import "../../fonts/AlmaMono-Regular.otf";

const DynamicIsland = (props) => {
	const [width, setWidth] = useState(1);
	const [disable, setDisable] = useState(false);
	const [guess, setGuess] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		setGuess(guess + props.typedChar);
		inputRef.current.value = guess;
	}, [props.timestamp]);

	const changeHandler = (e) => {
		setGuess(e.target.value.toUpperCase());
		setWidth(e.target.value.length > 0 ? e.target.value.length : 1);
	};

	const enterHandler = (e) => {
		// prevent cursor navigation with arrow keys
		if (e.keyCode === 37 || e.keyCode === 39) {
			e.preventDefault();
		}

		if (e.key === "Enter" && e.target.value.trim().length > 0) {
			props.enterPressed(true);
			setDisable(true);
		} else if (e.key === "Enter" && e.target.value.trim().length === 0) {
			setWidth(1);
			inputRef.current.value = "";
			setGuess("");
		}
	};

	return (
		<div>
			{guess}
			<input
				ref={inputRef}
				disabled={disable}
				style={{ width: width + "ch" }}
				type="text"
				autoFocus
				onChange={changeHandler}
				onKeyDown={enterHandler}
				id="island"
				className="rounded-0 bg-dark"
				value={guess}
			/>
		</div>
	);
};

export default DynamicIsland;

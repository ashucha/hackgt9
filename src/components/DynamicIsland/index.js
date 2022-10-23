import React, { useState, useRef } from "react";

import "./index.css";
import "../../fonts/AlmaMono-Regular.otf";

const DynamicIsland = (props) => {
	const [width, setWidth] = useState(1);
	const [disable, setDisable] = useState(false);

	const changeHandler = (e) => {
		setWidth(e.target.value.length > 0 ? e.target.value.length : 1);
	};

	const inputRef = useRef(null);

	const enterHandler = (e) => {
		if (e.key === "Enter" && e.target.value.trim().length > 0) {
			props.enterPressed({enterPressed: true, guess: e.target.value.trim()});
			setDisable(true);
		} else if (e.key === "Enter" && e.target.value.trim().length === 0) {
			setWidth(1);
			inputRef.current.value = "";
		}
	};

	return (
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
		/>
	);
};

export default DynamicIsland;

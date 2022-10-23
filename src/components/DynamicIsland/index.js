import React, { useState, useRef } from "react";

import "./index.css";
import {motion} from 'framer-motion'

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
		<motion.div animate={{x: props.move ? 10 : 0}} transition={{type: 'spring', bounce: 2}}>
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
		</motion.div>
	);
};

export default DynamicIsland;

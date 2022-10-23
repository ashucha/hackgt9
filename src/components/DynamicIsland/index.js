import React, { useEffect, useRef, useState } from "react";

import "./index.css";
import {motion} from 'framer-motion'

const DynamicIsland = (props) => {
	const [width, setWidth] = useState(1);
	const [disable, setDisable] = useState(false);
	const [guess, setGuess] = useState("");

	const inputRef = useRef(guess);

	useEffect(() => {
		if (!disable && props.typedCharData) {
			inputRef.current.value = guess + props.typedCharData.newChar;
			setGuess(guess + props.typedCharData.newChar);
			inputRef.current.focus();
			setWidth(guess.length > 0 ? width + 1 : 1);
		}
	}, [props.typedCharData]);

	const changeHandler = (e) => {
		setGuess(e.target.value.toUpperCase());
		setWidth(e.target.value.length > 0 ? e.target.value.length : 1);
		inputRef.current.focus();
	};

	const enterHandler = (e) => {
		// prevent cursor navigation with arrow keys
		if (e.keyCode === 37 || e.keyCode === 39) {
			e.preventDefault();
		}

		if (e.key === "Enter" && e.target.value.trim().length > 0) {
			props.enterPressed({ enterPressed: true, guess: e.target.value.trim() });
			setDisable(true);
			if (props.typedCharData) {
				props.typedCharData.newChar = "";
			}
			props.enterPressed(true);
		} else if (e.key === "Enter" && e.target.value.trim().length === 0) {
			setWidth(1);
			inputRef.current.value = "";
			setGuess("");
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

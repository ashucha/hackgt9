import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import "./index.css";

const DynamicIsland = (props) => {
	const [width, setWidth] = useState(1);
	const [disable, setDisable] = useState(false);
	const [guess, setGuess] = useState("");

	const inputRef = useRef(guess);

	useEffect(() => {
		if (!disable && props.typedCharData) {
			const newChar = props.typedCharData.newChar;
			let delWidth = 1;
			if (newChar === "Enter") {
				const enterEvent = new KeyboardEvent("keydown", {
					code: "Enter",
					key: "Enter",
				});
				Object.defineProperty(enterEvent, "data", {
					writable: false,
					value: guess,
				});
				enterHandler(enterEvent);
				delWidth = 0;
			} else if (newChar === "Backspace") {
				setGuess(inputRef.current.value.slice(0, -1));
				delWidth = guess.length > 1 ? -1 : 0;
			} else if (newChar === "Space") {
				setGuess(inputRef.current.value + " ");
			} else {
				inputRef.current.value = guess + newChar;
				setGuess(guess + newChar);
			}
			inputRef.current.focus();
			setWidth(guess.length > 0 ? width + delWidth : 1);
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

		if (e.key === "Enter" && guess.trim().length > 0) {
			props.enterPressed({ enterPressed: true, guess: guess.trim() });
			setDisable(true);
			if (props.typedCharData) {
				props.typedCharData.newChar = "";
			}
			props.enterPressed(true);
		} else if (e.key === "Enter" && guess.trim().length === 0) {
			setWidth(1);
			inputRef.current.value = "";
			setGuess("");
		}
	};

	return (
		<motion.div
			animate={{ x: props.move ? 10 : 0 }}
			transition={{ type: "spring", bounce: 2 }}
		>
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
		</motion.div>
	);
};

export default DynamicIsland;

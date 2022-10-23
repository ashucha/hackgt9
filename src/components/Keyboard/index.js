import React from "react";

import { Button, Col, Container, Row } from "reactstrap";

import "./index.css";

const Keyboard = (props) => {
	const handleClick = (e) => {
		props.keyPressed(e.target.innerText);
	};

	return (
		<div>
			<Container className="text-center">
				<div className="keyboard-row">
					<Button className="keyboard-key" onClick={handleClick}>
						<span>Q</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>W</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>E</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>R</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>T</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>Y</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>U</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>I</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>O</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>P</span>
					</Button>
				</div>
				<div className="keyboard-row">
					<Button className="keyboard-key" onClick={handleClick}>
						<span>A</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>S</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>D</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>F</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>G</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>H</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>J</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>K</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>L</span>
					</Button>
				</div>
				<div className="keyboard-row">
					<Button className="keyboard-key keyboard-key-wide">
						<span>SHIFT</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>Z</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>X</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>C</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>V</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>B</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>N</span>
					</Button>
					<Button className="keyboard-key" onClick={handleClick}>
						<span>M</span>
					</Button>
					<Button className="keyboard-key keyboard-key-wide">
						<span>ENTER</span>
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default Keyboard;

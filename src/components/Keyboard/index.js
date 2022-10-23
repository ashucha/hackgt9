import React from "react";

import { Button, Container } from "reactstrap";

import "./index.css";

const Keyboard = (props) => {
	const handleClick = (e) => {
		props.keyPressed({ newChar: e.target.innerText, time: Date.now() });
	};

	return (
		<div>
			<Container className="keyboard-container text-center">
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
						<span>ENTER</span>
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
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
								className="game-icon"
								data-testid="icon-backspace"
							>
								<path
									fill="white"
									d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
								></path>
							</svg>
						</span>
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default Keyboard;

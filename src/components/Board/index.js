import React, { useEffect, useRef, useState } from "react";

import { Col, Container, Row } from "reactstrap";

import "./index.css";

const Board = () => {
	const [numGuesses, setNumGuesses] = useState(0);

	return (
		<div>
			{/* Board */}
			<Container className="board"></Container>
		</div>
	);
};

export default Board;

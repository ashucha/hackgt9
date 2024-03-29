import React, { useState } from "react";

import "./index.css";
import DynamicIsland from "../DynamicIsland";
import migosRemix from "./migosChorus/migosRemix.wav";
import migosPitch from "./migosChorus/migosPitch.wav";
import migosOther from "./migosChorus/migosOther.wav";
import migosBassDrums from "./migosChorus/migosBassDrums.wav";
import migosVocals from "./migosChorus/migosVocals.wav";
import migosChorus from "./migosChorus/migosChorus.wav";

import flashRemix from "./flashChorus/flashRemix.wav";
import flashPitch from "./flashChorus/flashPitch.wav";
import flashOther from "./flashChorus/flashOther.wav";
import flashBassDrums from "./flashChorus/flashBassDrums.wav";
import flashVocals from "./flashChorus/flashVocals.wav";
import flashChorus from "./flashChorus/flashChorus.wav";

import africaRemix from "./africaChorus/africaRemix.wav";
import africaPitch from "./africaChorus/africaPitch.wav";
import africaOther from "./africaChorus/africaOther.wav";
import africaBassDrums from "./africaChorus/africaBassDrums.wav";
import africaVocals from "./africaChorus/africaVocals.wav";
import africaChorus from "./africaChorus/africaChorus.wav";

import fireworkRemix from "./fireworkChorus/fireworkRemix.wav";
import fireworkPitch from "./fireworkChorus/fireworkPitch.wav";
import fireworkOther from "./fireworkChorus/fireworkOther.wav";
import fireworkBassDrums from "./fireworkChorus/fireworkBassDrums.wav";
import fireworkVocals from "./fireworkChorus/fireworkVocals.wav";
import fireworkChorus from "./fireworkChorus/fireworkChorus.wav";

import WinModal from "../../components/WinModal";
import LoseModal from "../../components/LoseModal";

const Board = (props) => {
	const migos = [
		migosBassDrums,
		migosPitch,
		migosOther,
		migosVocals,
		migosRemix,
		migosChorus,
	];
	const flash = [
		flashBassDrums,
		flashPitch,
		flashOther,
		flashVocals,
		flashRemix,
		flashChorus,
	];
	const africa = [
		africaBassDrums,
		africaPitch,
		africaOther,
		africaVocals,
		africaRemix,
		africaChorus,
	];
	const firework = [
		fireworkBassDrums,
		fireworkPitch,
		fireworkOther,
		fireworkVocals,
		fireworkRemix,
		fireworkChorus,
	];
	const totals = [migos, flash, africa, firework];
	const [randomIndex, setRI] = useState(Math.floor(Math.random() * 4));
	const currentSongArray = totals[randomIndex];
	const [numGuesses, setNumGuesses] = useState(1);
	const [index, setIndex] = useState(0);
	const [currentSong, setCurrentSong] = useState(currentSongArray[index]);

	const answers = [
		"WALK IT LIKE I TALK IT",
		"FLASHING LIGHTS",
		"AFRICA",
		"FIREWORK",
	];

	const [showWinModal, setShowWinModal] = useState(false);
	const [showLoseModal, setShowLoseModal] = useState(false);

	const [move, setMove] = useState(false);

	const enterHandler = (data) => {
		if (data.guess && data.guess.toUpperCase() === answers[randomIndex]) {
			setShowWinModal(true);
		} else if (data !== true) {
			if (numGuesses < 6) {
				setNumGuesses(numGuesses + 1);
				setCurrentSong(currentSongArray[index + 1]);
				setIndex(index + 1);
				setMove(!move);
			} else if (numGuesses === 6) {
				setShowLoseModal(true);
			}
		}
	};

	return (
		<div className="island-container">
			{Array(numGuesses).fill(
				<DynamicIsland
					enterPressed={enterHandler}
					typedCharData={props.typedCharData}
					move={move}
					setMove={setMove}
				/>
			)}
			<div>
				<audio src={currentSong} controls></audio>
			</div>
			{showWinModal && <WinModal></WinModal>}
			{showLoseModal && <LoseModal></LoseModal>}
		</div>
	);
};

export default Board;

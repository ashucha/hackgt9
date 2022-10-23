import React from "react";
import NavBar from "../../components/NavBar";
import IntroModal from "../../components/IntroModal";

const Home = () => {
	return (
		<div>
			<div style={{borderBottom: '1px solid white'}}><NavBar></NavBar></div>
			<h1 style={{textAlign: 'center'}}>Home</h1>
		</div>
	);
};

export default Home;

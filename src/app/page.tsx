import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";

const page = () => {
	return (
		<div className="group">
			<Hero />
			<Services />
			<About />
			<Automobiles />
		</div>
	);
};

export default page;

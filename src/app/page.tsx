import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const page = () => {
	return (
		<div className="group">
			<Hero />
			<Services />
			<Automobiles />
		</div>
	);
};

export default page;

import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Faqs from "./components/Faqs/Faqs";
const page = () => {
	return (
		<div className="group">
			<Hero />
			<Services />
			<Faqs />
			<About />
			<Automobiles />
		</div>
	);
};

export default page;

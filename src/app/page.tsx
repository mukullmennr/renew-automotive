import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Faqs from "./components/Faqs/Faqs";
import { Reviews } from "./components/Reviews/Reviews";
import Steps from "./components/Steps/Steps";

const page = () => {
	return (
		<div className="group">
			<Hero />
			<Services />
			<About />
			<Steps />
			<Reviews />
			<Faqs />
			<Automobiles />
		</div>
	);
};

export default page;

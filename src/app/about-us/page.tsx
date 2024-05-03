import React from "react";
import Welcome from "../components/about-us/Welcome/Welcome";
import Advantages from "../components/about-us/Advantages/Advantages";
import Help from "../components/about-us/Help/Help";
import Carousel from "../components/about-us/Carousel/Carousel";
import Common_hero from "@/components/common_hero/Common_hero";
import { about } from "../../data/hero";

const page = () => {
	return (
		<div className="group">
			<Common_hero data={about} />
			<Welcome />
			<Advantages />
			<Carousel />
			<Help />
		</div>
	);
};

export default page;

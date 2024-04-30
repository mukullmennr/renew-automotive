import React from "react";
import Welcome from "../components/about-us/Welcome/Welcome";
import Advantages from "../components/about-us/Advantages/Advantages";
import Help from "../components/about-us/Help/Help";
import Carousel from "../components/about-us/Carousel/Carousel";
const page = () => {
	return (
		<div
			className="group"
			style={{
				marginBlockStart: "4em",
			}}
		>
			<Welcome />
			<Advantages />
			<Carousel />
			<Help />
		</div>
	);
};

export default page;

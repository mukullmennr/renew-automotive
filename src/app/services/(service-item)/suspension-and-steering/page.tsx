import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading:
		"Trust Renew Automotive to Restore Your Suspension and Steering Today!",
	text: [
		{
			text: "Your comfort and safety on the road are our top priorities. If you're noticing your vehicle riding rough, experiencing unusual sounds when turning, or feeling excessive vibration, addressing these issues promptly is crucial. Our seasoned technicians have the expertise and precision to efficiently diagnose and resolve any suspension or steering concerns.",
		},
		{
			text: "We believe in open communication and will explain any necessary repairs or adjustments to optimize your vehicle's performance. ",
		},
		{
			text: "With Renew Automotive, you can be confident that you're not just receiving a repair service, but also gaining valuable insight into your vehicle's health and longevity. Trust us to take care of your car and drive with confidence.",
		},
	],
	list: {
		text: "Here are the suspension and steering issues we can visually inspect:",
		items: [
			"Shocks",
			"Struts",
			"Ball joints",
			"Control arms",
			"Bushings",
			"Tie rods",
			"Wheel Bearings",
			"Hub assemblies",
			"Rack and pinion",
			"Coil springs",
			"CV joints and axles",
			"Power Steering",
		],
	},
};

const page = () => {
	return (
		<>
			<Main data={data} />
		</>
	);
};

export default page;

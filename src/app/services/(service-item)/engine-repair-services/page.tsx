import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Trust Renew Automotive Service for engine repairs today!",
	text: [
		{
			text: "Renew Automotive understands the importance of a smoothly running engine for your vehicle's performance and peace of mind. Our experienced technicians are equipped with the latest diagnostic tools and expertise to tackle any engine issue with precision and care.",
		},
		{
			text: "Our technicians are adept at diagnosing and resolving engine challenges swiftly and effectively, from the subtle warning of a glowing check engine light to the unsettling sounds emanating from under the hood. We get deep into the heart of your vehicle, meticulously analyzing every component to identify the root cause of the problem.",
		},
		{
			text: "If your engine is experiencing rough idling, mysterious knocking sounds, or a decline in fuel efficiency, our dedicated team is here to restore it to optimal performance. Our commitment to quality and reliability means we strive to exceed your expectations at every turn.",
		},
		{
			text: "At Renew Automotive, transparency is a fundamental part of our approach. Our certified technicians conduct a comprehensive vehicle inspection and provide transparent and honest recommendations for repair solutions tailored to your needs.",
		},
		{
			text: "Choose Renew Automotive for incomparable expertise and service excellence. Trust us to keep your vehicle running smoothly so you can confidently focus on the road ahead.",
		},
	],
	list: {
		text: "Some of the engine repair services we offer include, but are not limited to:",
		items: [
			"Visual inspection for oil leaks",
			"Ignition wires and coil packs",
			"Spark plug replacement",
			"Fuel pump diagnosis and repair",
			"Emissions system diagnostics and repairs",
			"PCV valve inspection and replacement",
			"Valve cover gasket replacement",
			"Head gasket repair",
			"Timing belt and chain inspection",
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

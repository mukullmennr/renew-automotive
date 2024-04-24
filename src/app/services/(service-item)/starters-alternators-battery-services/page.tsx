import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Reliable Vehicle Maintenance and Repair Services",
	text: [
		{
			text: "Modern vehicles rely heavily on intricate computer and electrical systems to function efficiently. At Renew Automotive, our expert technicians are equipped with advanced diagnostic tools to accurately diagnose and repair these complex systems.    ",
		},
		{
			text: "Our comprehensive electrical diagnostic and repair services address various issues, ensuring your vehicle's systems operate smoothly and efficiently. From diagnosing communication errors to repairing faulty components, we prioritize accuracy and efficiency in every repair.",
		},
	],
	list: {
		text: "With the intricate network of wires and components in your vehicle, communication errors can affect its performance. Some symptoms that may point to electrical problems include but are not limited to the following:        ",
		items: [
			"Dimming headlights",
			"Delayed starting",
			"Clicking sound when attempting to start the vehicle",
			"Grinding noise when trying to start the vehicle",
			"Check engine light",
			"The smell of burning rubber",
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

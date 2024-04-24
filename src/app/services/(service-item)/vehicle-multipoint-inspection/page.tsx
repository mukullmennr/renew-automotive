import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Trust Renew Automotive for Expert Vehicle Inspections Today!",
	text: [
		{
			text: "At Renew Automotive, we are committed to ensuring the reliability and safety of your vehicle through our meticulous multi-point inspection process. To achieve this, we subject every vehicle we service to a thorough assessment by our experienced technicians. Our technicians examine various components to identify potential issues before they escalate into costly repairs.        ",
		},
		{
			text: "Our multi-point inspections are proactive measures that provide valuable insights into your vehicle's health and performance. Whether you need immediate repairs or are planning for future maintenance, our detailed inspection reports document recommended repairs and maintenance tasks. This information allows you to make informed decisions about your vehicle's care.        ",
		},
		{
			text: "During the inspection, our technicians assess critical systems such as the engine, transmission, brakes, suspension, steering, electrical systems, and fluid levels. We help you avoid unexpected breakdowns and costly repairs by addressing any underlying issues early on.        ",
		},
		{
			text: "At Renew Automotive, we value transparency and communication. That's why we take the time to explain our findings and recommendations thoroughly, ensuring you have a clear understanding of your vehicle's condition.        ",
		},
		{
			text: "You can trust Renew Automotive for comprehensive multipoint inspections prioritizing your safety and peace of mind. Our proactive approach to vehicle maintenance ensures that you can drive confidently, knowing that your car is in expert hands.",
		},
	],
	list: {
		text: "A comprehensive inspection covers, but is not limited to, the following components:        ",
		items: [
			"Engine Oil",
			"Fluid levels (power steering, coolant, brake fluid, etc.)",
			"Air filter",
			"Drive belts",
			"Battery",
			"Brakes",
			"Wipers",
			"Shocks/struts/springs",
			"Ball joints and bushings",
			"Tires",
			"Tire pressure",
			"Engine light codes",
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

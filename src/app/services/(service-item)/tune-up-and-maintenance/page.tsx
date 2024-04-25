import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Keep Your Vehicle Running Smoothly with Renew Automotive",
	text: [
		{
			text: "At Renew Automotive, we offer tune-up and maintenance services to help you keep your vehicle in top condition. Regular maintenance ensures your car's longevity, performance, and fuel efficiency. Our expert team provides comprehensive maintenance and tune-up services to keep your car running smoothly and prevent costly repairs in the future.",
		},
		{
			text: "Your vehicle has several moving parts, and each one needs regular lubrication with clean fluids. Filters are also important to prevent harmful deposits from compromising fluid cleanliness and system performance. ",
		},
		{
			text: "By entrusting your vehicle to Renew Automotive, you can confidently drive, knowing your car is in expert hands .We aim to help you maintain your vehicle's performance, reliability, and efficiency. We want to ensure that you enjoy worry-free driving for years to come.",
		},
	],
	list: {
		text: "Our team of skilled technicians is here to provide a comprehensive range of maintenance and tune-up services, including but not limited to:",
		items: [
			"Air filter replacement",
			"Fuel filter replacement",
			"Spark plugs replacement",
			"Cabin air filter replacement",
			"Fuel Injector Cleaning",
			"Coils boot Inspection",
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

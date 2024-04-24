import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Repair Your Vehicle to Ensure Emissions Compliance",
	text: [
		{
			text: "When your vehicle's check engine light illuminates, it can be concerning and potentially costly.  At Renew Automotive, we make the diagnosis process easy by providing thorough scanning and diagnostics to identify the root cause of the problem.             ",
		},
		{
			text: "We start by scanning the vehicle for error codes and conducting comprehensive diagnostics to pinpoint the underlying issue. We value transparency and accuracy and provide detailed repair quotes, including parts and labor costs.            ",
		},
		{
			text: "If necessary, we may request that the vehicle be left with us for a more in-depth diagnostic procedure to determine the precise source of the problem. We aim to avoid guesswork and ensure that repairs are completed efficiently and effectively.            ",
		},
	],
	list: {
		text: "At Renew Automotive, we prioritize finding the source of the problem to deliver cost-effective solutions promptly. Some common issues that may lead to a failed emissions test or trigger the check engine light include:        ",
		items: [
			"Catalytic converter malfunction",
			"EGR valve issues",
			"Faulty oxygen sensor",
			"Problems with the air injection system",
			"Issues with evaporative emission control",
			"Malfunctioning PCV valve",
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

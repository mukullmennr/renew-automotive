"@/components/Hero/Hero";
import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Expert AC/Heater Diagnostic and Repair Services",
	text: [
		{
			heading: "Expert AC/Heater Diagnostic and Repair Services",
			text: "At Renew Automotive, we understand the importance of a comfortable and safe driving experience in any weather condition. That's why our dedicated team provides comprehensive AC/heater diagnostic and repair services to keep your vehicle running smoothly all year round.",
		},
		{
			heading: "Why AC and Heater Maintenance Matters",
			text: "Your vehicle's AC compressor and heater core are vital components that ensure your comfort and safety on the road. Even during the winter months, your AC compressor plays a crucial role in maintaining visibility by removing humidity from the air when you activate the defrost function. It also helps prevent frost and ice buildup on your windshield and windows. On the other hand, the heater core is responsible for keeping you warm by circulating heated air through the vents and defrost, ensuring a cozy ride even in the coldest weather.",
		},
		{
			heading: "Common Signs of AC and Heater Issues",
			text: "It's essential to be aware of the common signs that indicate potential problems with your AC compressor, heater core, or coolant system. Look out for the following symptoms.",
		},
	],
	list: {
		text: "Some of the Air conditioning Diagnostics Service and repair we offer include, but are not limited to:",
		items: [
			"Defrost not functioning correctly",
			"Fog emitting from vents",
			"Sweet smell emanating from vents",
			"Cold air blowing when heat is on",
			"Cold air entering the cabin despite the engine running hot",
			"Lack of cold air when AC is activated",
			"Squealing noise upon starting the vehicle with the fan on high",
			"Low coolant levels indicating a potential leak",
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

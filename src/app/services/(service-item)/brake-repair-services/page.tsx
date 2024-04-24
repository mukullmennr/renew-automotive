import React from "react";
import Main from "../components/Main/Main";

const data = {
	image: {
		sm: "/services-page/engine/main-sm.webp",
		lg: "/services-page/engine/main.webp",
	},

	heading: "Vehicle Brake Maintenance and Repair Services",
	text: [
		{
			text: "Brakes are a crucial component of every vehicle, ensuring the safety and protection of drivers and passengers. At Renew Automotive, we understand the significance of maintaining optimal brake performance. Over time, brake pads and rotors wear out naturally and require regular inspection and maintenance to ensure peak performance.",
		},
		{
			text: "Various factors influence the longevity of brake pads and rotors, including driving habits and road conditions. Signs indicating that your brakes may require attention include squealing or crunching noises, vibrations or shaking when braking, or a spongy feeling in the brake pedal. These symptoms should prompt immediate inspection and, if necessary, repair by our skilled technicians.",
		},
		{
			text: "Besides monitoring brake pad and rotor wear, it is essential to check brake lines regularly. Brake lines contain fluid that facilitates the operation of calipers and other brake components. Routine inspection ensures proper lubrication and helps prevent issues such as brake fade or loss of braking power.",
		},
	],
	list: {
		text: "Some of the brake repair services we offer include, but are not limited to:",
		items: [
			"Replacement of worn brake pads or shoes",
			"Resurfacing or replacement of damaged brake rotors or drums",
			"Flushing or bleeding of brake fluid to maintain hydraulic integrity",
			"Inspection and servicing of brake calipers for optimal performance",
			"Diagnostic services to address brake system warning lights or issues",
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

import React from "react";
import styles from "./steps.module.scss";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";

const data = [
	{
		title: "Customer Checklist:",
		icon: "/steps/one.webp",
		text: "Begin by compiling a checklist of your car's issues or required services, ensuring all concerns are accounted for before scheduling an appointment with Renew Automotive",
	},
	{
		title: "Schedule Appointment:",
		icon: "/steps/two.webp",
		text: "Schedule an appointment with Renew Automotive, where expertise meets convenience. We offer flexible scheduling options tailored to your needs.",
	},
	{
		title: "Drop Off:",
		icon: "/steps/three.webp",
		text: "Entrust your vehicle in the hands of skilled technicians at Renew Automotive who will provide regular progress updates during the repair process.",
	},
	{
		title: "Pick Up:",
		icon: "/steps/four.webp",
		text: "Retrieve your fully repaired car from Renew Automotive, restored to optimal condition and backed by our satisfaction guarantee, ensuring peace of mind for your journey ahead.",
	},
];

const Steps = () => {
	const infoElements = data.map((item, index) => {
		return (
			<div
				key={item.title}
				data-index={index + 1}
				className={styles.info_item}
			>
				<div className={styles.image}>
					<img src={item.icon} alt={item.title} />
				</div>

				<div className={styles.content}>
					<h3>{item.title}</h3>

					<p>{item.text}</p>
				</div>
			</div>
		);
	});

	return (
		<div className={styles.steps}>
			<Container type="normal">
				<div className={styles.heading_container}>
					<h2 className="subheading">
						Streamline Your Car Care Journey
					</h2>

					<p className="subheading-support">
						These few steps will help return your car to a working
						condition
					</p>

					<Line />
				</div>

				<div className={styles.info}>{infoElements}</div>
			</Container>
		</div>
	);
};

export default Steps;

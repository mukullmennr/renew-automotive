"use client";

import React, { useState } from "react";
import styles from "./about.module.scss";
import * as Tabs from "@radix-ui/react-tabs";
import Additional from "@/components/SVG/Additional";
import Advantages from "@/components/SVG/Advantages";
import About from "@/components/SVG/About";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";

const triggerData = [
	{
		title: "Additional Services",
	},
	{
		title: "Our Advantages",
	},
	{
		title: "About Company",
	},
];

const additionalContent = {
	title: "Additional Services",
	text: "Below are some of the many auto repair services we offer:",
	list: [
		"FREE Loaner Cars",
		"FREE Shuttle Service",
		"General Auto Repair & Maintenance",
		"Transmission Repair & Replacement",
		"Fuel System Repair",
		"Exhaust System Repair",
		"Engine Cooling System Maintenance",
		"Electrical Diagnostics",
		"Starting and Charging Repair",
		"Wheel Alignment",
		"Computer Diagnostic Testing",
		"Manufacturer Recommended Service",
		"Brake Repair and Replacement",
		"Air Conditioning A/C Repair",
		"Tire Repair and Replacement",
		"Vehicle Preventative Maintenance",
		"State Emissions Inspection",
		"Emission Repair Facility",
		"Oil Change",
		"Brake Job / Brake Service",
		"Engine Cooling System Flush & Repair",
		"Steering and Suspension Work",
	],
};

const advantageContent = {
	title: "Our Advantages",
	items: [
		{
			title: "Expert Technicians: ",
			text: "Our certified technicians are trained to handle all your vehicle needs with precision and expertise.",
		},
		{
			title: "Convenience:",
			text: "Flexible scheduling options to suit your busy lifestyle.",
		},
		{
			title: "Peace of Mind:",
			text: "Drive away knowing your vehicle is in safe hands. ",
		},
		{
			title: "Quality Service: ",
			text: "Your vehicle will receive the best  care using the latest tools and techniques.",
		},
	],
};

const aboutContent = {
	title: "About Company",
	text: "Renew Automotive is not just an automotive service provider; we are your committed partner in ensuring your vehicle's performance and longevity. We were founded with a vision to redefine automotive care, and for many years, we have been serving our community with excellence.",
	items: [
		{
			title: "Our Commitment",
			text: "At Renew Automotive, we believe that every vehicle deserves the highest standard of care. Therefore, we have a team of passionate professionals dedicated to delivering expert service with a personal touch. Whether it's routine maintenance or complex repairs, we are here to ensure that your vehicle receives the attention it deserves.",
		},
		{
			title: "Our Driving Force",
			text: "Our driving force is your satisfaction. We are committed to exceeding your expectations by providing transparent communication, reliable service, and peace of mind with every visit. Whether you need a routine oil change or a significant repair, you can trust Renew Automotive to deliver exceptional results.",
		},
		{
			title: "Our Promise",
			text: "When you choose Renew Automotive, you're not only selecting a service provider; you're choosing a partner you can rely on. Our promise to you is simple: to provide expert service, convenience, and peace of mind so you can hit the road with confidence.",
		},
	],
};

const AboutTabs = () => {
	const [more, setMore] = useState(false);

	const getSVG = (title: string) => {
		switch (title) {
			case "Additional Services":
				return <Additional />;
			case "Our Advantages":
				return <Advantages />;
			case "About Company":
				return <About />;
			default:
				return <Additional />;
		}
	};

	const trigger = triggerData.map(({ title }) => {
		return (
			<Tabs.Trigger value={title} key={title} className={styles.trigger}>
				{getSVG(title)}
				{title}
			</Tabs.Trigger>
		);
	});

	const additional = (() => {
		return (
			<Tabs.Content
				value={additionalContent.title}
				className={styles.additional}
			>
				<div className={styles.image}>
					<img src="/about/about.webp" alt="" />
				</div>

				<div className={styles.additional_content}>
					<div className={styles.additional_container}>
						<p>{additionalContent.text}</p>
						<ul>
							{additionalContent.list.map((item) => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
						<div className={styles.show_more}>
							<input
								id="show-more"
								type="checkbox"
								style={{ display: "none" }}
								aria-hidden
								checked={more}
								onChange={() => setMore((prev) => !prev)}
							/>
							<label htmlFor="show-more">
								{more ? "- Show Less" : "+ More Services"}
							</label>
						</div>
					</div>
				</div>
			</Tabs.Content>
		);
	})();

	const advantage = (() => {
		return (
			<Tabs.Content
				value={advantageContent.title}
				className={styles.advantage}
			>
				<Container type="normal">
					<ul>
						{advantageContent.items.map((item) => {
							return (
								<li key={item.title}>
									<h3>{item.title}</h3>

									<p>{item.text}</p>
								</li>
							);
						})}
					</ul>
				</Container>
			</Tabs.Content>
		);
	})();

	const about = (() => {
		return (
			<Tabs.Content
				value={aboutContent.title}
				className={styles.about_tab}
			>
				<div className={styles.image}>
					<img src="/about/about.webp" alt="" />
				</div>

				<div className={styles.about_content}>
					<div className={styles.about_container}>
						<p>{aboutContent.text}</p>
						<div className={styles.about_items}>
							{aboutContent.items.map((item) => {
								return (
									<div key={item.title}>
										<h3>{item.title}</h3>
										<Line />
										<p>{item.text}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</Tabs.Content>
		);
	})();

	return (
		<Tabs.Root defaultValue={triggerData[0].title} className={styles.tab}>
			<Tabs.List aria-label="Additional services" className={styles.list}>
				{trigger}
			</Tabs.List>

			{additional}
			{advantage}
			{about}
		</Tabs.Root>
	);
};

export default AboutTabs;

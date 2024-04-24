"use client";

import React from "react";
import styles from "./hero.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

const items = [
	{ text: "Engine Repair Services", link: "engine-repair-services" },
	{
		text: "Air Conditoning Diagnostics Service and Repair",
		link: "air-conditioning-diagonistics",
	},
	{
		text: "Tune-ups and Maintenance Services",
		link: "tune-up-and-maintenance",
	},
	{ text: "Suspension & Steering", link: "suspension-and-steering" },
	{
		text: "Vehicle Multipoint Inspection",
		link: "vehicle-multipoint-inspection",
	},
	{ text: "Auto Brake Repair & Maintainence", link: "brake-repair-services" },
	{ text: "Emissions Repair Services", link: "emissions-repair-services" },
	{ text: "Auto Pre-Purchase Inspections", link: "pre-purchase-inspections" },
	{
		text: "Starters, Alternators & Battery Services",
		link: "starters-alternators-battery-services",
	},
];

const Hero = () => {
	const segment = useSelectedLayoutSegment();

	const getTitle = (segment: string | null) => {
		switch (segment) {
			case items[0].link:
				return items[0].text;
			case items[1].link:
				return items[1].text;
			case items[2].link:
				return items[2].text;
			case items[3].link:
				return items[3].text;
			case items[4].link:
				return items[4].text;
			case items[5].link:
				return items[5].text;
			case items[6].link:
				return items[6].text;
			case items[7].link:
				return items[7].text;
			case items[8].link:
				return items[8].text;
			case null:
				return "404 Not Found";
		}
	};

	return (
		<div className={styles.hero}>
			<img
				srcSet="/cover-sm.webp 640w, /cover.webp 1024w"
				sizes="(min-width: 64em) 1024px, 640px"
				alt=""
			/>

			<div className={styles.text}>
				<h1 style={{ textAlign: "center" }}>{getTitle(segment)}</h1>

				<div className={styles.bread_crumb}>
					<Link href="/">Home</Link> /{" "}
					<Link href="/services">Our Services</Link> /{" "}
					<Link href="">{getTitle(segment)}</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;

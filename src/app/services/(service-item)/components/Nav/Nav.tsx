"use client";

import React from "react";
import styles from "./nav.module.scss";
import { contact } from "@/data/contact";

import EngineRepair from "@/components/SVG/EngineRepair";
import AC from "@/components/SVG/AC";
import Exhaust from "@/components/SVG/Exhaust";
import Transmission from "@/components/SVG/Transmission";
import Tire from "@/components/SVG/Tire";
import Brake from "@/components/SVG/Brake";
import OilLube from "@/components/SVG/OilLube";
import Inspection from "@/components/SVG/Inspection";
import Battries from "@/components/SVG/Battries";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faLocationDot,
	faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const items = [
	{ text: "Engine Repair Services", link: "engine-repair-services" },
	{
		text: "Air Conditoning Diagnostics, Service & Repair",
		link: "air-conditioning-diagonistics",
	},
	{ text: "Tune Up & Maintenance", link: "tune-up-and-maintenance" },
	{ text: "Suspension & Steering", link: "suspension-and-steering" },
	{
		text: "Vehicle Multipoint Inspection",
		link: "vehicle-multipoint-inspection",
	},
	{ text: "Brake Repair Services", link: "brake-repair-services" },
	{ text: "Emissions Repair Services", link: "emissions-repair-services" },
	{ text: "Pre-Purchase Inspections", link: "pre-purchase-inspections" },
	{
		text: "Starters, Alternators & Battery Services",
		link: "starters-alternators-battery-services",
	},
];

const Nav = () => {
	const segment = useSelectedLayoutSegment();

	const getSVG = (title: string) => {
		switch (title) {
			case items[0].text:
				return <EngineRepair />;
			case items[1].text:
				return <AC />;
			case items[2].text:
				return <Exhaust />;
			case items[3].text:
				return <Transmission />;
			case items[4].text:
				return <Tire />;
			case items[5].text:
				return <Brake />;
			case items[6].text:
				return <OilLube />;
			case items[7].text:
				return <Inspection />;
			case items[8].text:
				return <Battries />;
		}
	};

	return (
		<div className={styles.nav}>
			<div className={styles.nav_list}>
				{items.map((item) => {
					const active = segment === item.link;

					return (
						<Link
							href={item.link}
							key={item.text}
							className={`${active ? styles.active : ""}`}
						>
							{getSVG(item.text)}
							{item.text}
						</Link>
					);
				})}
			</div>

			<div className={styles.contact}>
				<h3>Contact Info</h3>

				<div className={styles.contact_container}>
					<table>
						<tbody>
							<tr>
								<td>
									<FontAwesomeIcon icon={faLocationDot} />
								</td>

								<td>
									<h4>Address</h4>

									<p>
										{contact.address.map((item) => {
											return (
												<React.Fragment key={item}>
													{item} <br />
												</React.Fragment>
											);
										})}
									</p>
								</td>
							</tr>

							<tr>
								<td>
									<FontAwesomeIcon icon={faPhoneVolume} />
								</td>

								<td>
									<h4>Contact Phone</h4>

									<p>
										{contact.phone.map((item) => {
											return (
												<React.Fragment key={item}>
													<Link href={`tel:${item}`}>
														{item}
													</Link>
													<br />
												</React.Fragment>
											);
										})}
									</p>
								</td>
							</tr>

							<tr>
								<td>
									<FontAwesomeIcon icon={faEnvelope} />
								</td>

								<td>
									<h4>E-mail Address</h4>

									<p>
										{contact.email.map((item) => {
											return (
												<React.Fragment key={item}>
													<Link
														href={`mailto:${item}`}
													>
														{item}
													</Link>
													<br />
												</React.Fragment>
											);
										})}
									</p>
								</td>
							</tr>

							<tr>
								<td>
									<FontAwesomeIcon icon={faClock} />
								</td>

								<td>
									<h4>Opening Hours</h4>

									<table>
										<tbody>
											{contact.timing.map((item) => {
												return (
													<tr key={item.day}>
														<td>{item.day}</td>
														<td>{item.time}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Nav;

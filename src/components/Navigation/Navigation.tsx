"use client";

import React, { useState } from "react";
import styles from "./navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
	faAngleDown,
	faArrowRight,
	faLocationDot,
	faPhoneVolume,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
	{
		link: "/",
		name: "Home",
	},
	{
		link: "/about-us",
		name: "About Us",
	},
	{
		link: "/services",
		name: "Services",
	},
	{
		link: "/blog",
		name: "Blog",
	},
	{
		link: "/gallery",
		name: "Gallery",
	},
	{
		link: "/contact-us",
		name: "Contact Us",
	},
];

const Navigation = () => {
	const [active, setActive] = useState(false);
	const segment = useSelectedLayoutSegment();

	const navLinks = links.map((link) => {
		let slug = "/" + (segment ?? "");
		const isActive = slug === link.link;

		return (
			<li key={link.link} className={`${isActive && styles.active}`}>
				<Link href={link.link}>{link.name}</Link>
			</li>
		);
	});

	return (
		<nav className={styles.nav}>
			<div
				className={`${styles.nav_upper} ${active ? styles.active : ""}`}
			>
				<div className={styles.items_parent}>
					<div className={styles.items}>
						<div className={styles.items_child}>
							<FontAwesomeIcon icon={faClock} />
							Monday-Saturday 7:00AM - 6:00PM
						</div>
						<div className={styles.items_child}>
							<FontAwesomeIcon icon={faPhoneVolume} />
							Schedule Your Appointement Today:{" "}
							<a href="tel:1-800-123-4567">1-800-123-4567</a>
						</div>
						<div className={styles.items_child}>
							<FontAwesomeIcon icon={faLocationDot} />
							3261 Anmoore Road Brooklyn, NY 11230
						</div>
					</div>
				</div>

				<div className={styles.main}>
					<div
						className={styles.show_more}
						onClick={() => setActive((prev) => !prev)}
					>
						{!active ? (
							<FontAwesomeIcon icon={faAngleDown} />
						) : (
							<FontAwesomeIcon icon={faXmark} />
						)}
					</div>

					<div className={styles.appointment}>
						<Link href="/">
							<span>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
							Appointment
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.nav_main}>
				<Container>
					<div className={styles.logo}>
						<Link href="/">
							<Image
								src="/logo.png"
								alt="Renew Automotive Services"
								width="162"
								height="48"
							/>
						</Link>
					</div>

					<div className={styles.nav_items}>
						<div className={styles.toggle}>
							<input
								type="checkbox"
								id="toggle"
								style={{ display: "none" }}
							/>
							<label htmlFor="toggle">
								<span></span>
							</label>
						</div>

						<div className={styles.nav_list}>
							<ul>{navLinks}</ul>
						</div>
					</div>
				</Container>
			</div>
		</nav>
	);
};

export default Navigation;

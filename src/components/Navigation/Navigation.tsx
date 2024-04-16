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

const Navigation = () => {
	const [active, setActive] = useState(false);

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
				<div className={styles.logo}></div>
			</div>
		</nav>
	);
};

export default Navigation;

import React from "react";
import styles from "./services.module.scss";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
import ServiceGroup from "./ServiceGroup";

const Services = () => {
	return (
		<div className={styles.services}>
			<Container>
				<div className={styles.heading_container}>
					<h2 className="subheading">Our Featured Services</h2>

					<p className="subheading-support">
						We offer full service auto repair & maintenance
					</p>

					<Line />
				</div>
			</Container>

			<Container type="small-full">
				<div className={styles.services_container}>
					<ServiceGroup />
				</div>
			</Container>
		</div>
	);
};

export default Services;

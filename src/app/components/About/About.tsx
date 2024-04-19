import React from "react";
import styles from "./about.module.scss";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
import AboutTabs from "./AboutTabs";

const About = () => {
	return (
		<div className={styles.about}>
			<Container type="normal">
				<div className={styles.heading_container}>
					<h2 className="subheading">Expert Automotive Care</h2>

					<p className="subheading-support">
						Navigate Your Car's Transformation Journey with These
						Essential Steps
					</p>

					<Line />
				</div>
			</Container>

			<Container type="full">
				<AboutTabs />
			</Container>
		</div>
	);
};

export default About;

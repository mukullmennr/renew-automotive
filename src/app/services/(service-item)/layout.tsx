import React from "react";
import Trust from "./components/Trust/Trust";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";
import Nav from "./components/Nav/Nav";

import styles from "./services.module.scss";

interface ServiceLayoutProps {
	children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
	return (
		<div className="group">
			<Hero />

			<Container type="normal">
				<div className={styles.container}>
					{children}
					<Nav />
				</div>
			</Container>
			<Trust />
		</div>
	);
};

export default ServiceLayout;

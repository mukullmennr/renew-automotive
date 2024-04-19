import React from "react";
import styles from "./trust.module.scss";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
import Appointment from "@/components/SVG/Appointment";
import Coupon from "@/components/SVG/Coupon";

const cardData = [
	{
		title: "Appointments",
		text: "Perform a search to find a store near you that accepts online appointment requests",
	},
	{
		title: "Coupons",
		text: "We like providing our customers with more than just one way to save",
	},
];

const Trust = () => {
	const getSVG = (title: string) => {
		switch (title) {
			case "Appointments":
				return <Appointment />;
			case "Coupons":
				return <Coupon />;
		}
	};

	const cards = cardData.map((item) => {
		return (
			<div key={item.title} className={styles.items}>
				{getSVG(item.title)}
				<h3>{item.title}</h3>
				<p>{item.text}</p>
			</div>
		);
	});

	return (
		<div className={styles.trust}>
			<Container type="normal">
				<div className={styles.text}>
					<div className={styles.image}>
						<img
							srcSet="/services-page/sub-services/trust-sm.webp 640w, /services-page/sub-services/trust.webp 768w"
							sizes="(min-width: 48em) 768px, 640px"
							src="/services-page/sub-services/trust-sm.webp"
							alt=""
						/>
					</div>

					<div className={styles.info}>
						<h2 className="subheading">Trust Our Services</h2>

						<Line />

						<p className="subheading-support">
							Renew Automotive takes pride in being a leading name
							in the automotive industry. Our top-tier services
							and premium products are designed to meet the needs
							of our customers. We have a team of highly skilled
							technicians who are committed to providing quality
							services that exceed expectations. Whether it's a
							routine maintenance task or a complex repair, we
							guarantee transparent communication, reliable
							warranties, and a commitment to customer
							satisfaction. Our products are rigorously tested and
							proven to deliver reliability, durability, and
							enhanced performance for your vehicle. We focus on
							innovation and continuous improvement to meet and
							exceed industry standards and provide the best
							possible service to our valued customers. Choose
							Renew Automotive for an unmatched car care
							experience that prioritizes excellence and customer
							satisfaction at every turn.
						</p>
					</div>
				</div>

				<div className={styles.cards}>{cards}</div>
			</Container>
		</div>
	);
};

export default Trust;

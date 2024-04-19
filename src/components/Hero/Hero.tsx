import React from "react";
import styles from "./hero.module.scss";

interface HeroProps {
	title: string;
}

const Hero = ({ title }: HeroProps) => {
	return (
		<div className={styles.hero}>
			<img
				srcSet="/cover-sm.webp 640w, /cover.webp 1024w"
				sizes="(min-width: 64em) 1024px, 640px"
				alt=""
			/>

			<div className={styles.text}>
				<h1>{title}</h1>
			</div>
		</div>
	);
};

export default Hero;

import React from "react";
import styles from "./container.module.scss";

interface ContainerProps {
	children: React.ReactNode;
	type?: "normal" | "small-full" | "full";
}

const Container = ({ children, type }: ContainerProps) => {
	const getClassName = () => {
		switch (type) {
			case "normal":
				return styles.container;
			case "small-full":
				return styles.container_wide_small;
			case "full":
				return styles.full;
			default:
				return styles.container;
		}
	};

	return <div className={getClassName()}>{children}</div>;
};

export default Container;

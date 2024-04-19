import React from "react";
import Trust from "./components/Trust/Trust";

interface ServiceLayoutProps {
	children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
	return (
		<div className="group">
			{children}
			<Trust />
		</div>
	);
};

export default ServiceLayout;

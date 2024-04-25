import React from "react";
import styles from "./main.module.scss";
import Line from "@/components/SVG/Line";

type Image = {
	sm: string;
	lg: string;
};

type Text = {
	heading?: string;
	text: string;
}[];

type List = {
	text: string;
	items: string[];
};

interface MainProps {
	data: {
		image: Image;
		heading: string;
		text: Text;
		list: List;
	};
}

const Main = ({ data }: MainProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.image}>
				<img
					srcSet={`${data.image.sm} 640w, ${data.image.lg} 1024w`}
					sizes="(min-width: 64em) 1024px, 640px"
					alt=""
				/>
			</div>

			<h2 className={styles.heading}>
				{data.heading}
				<Line />
			</h2>

			<div className={styles.text}>
				{data.text.map((item) => {
					const { text } = item;

					return (
						<div key={text}>
							{item.heading && item.heading.length > 0 && (
								<h3>{item.heading}</h3>
							)}

							<p>{text}</p>
						</div>
					);
				})}
			</div>

			<div className={styles.list}>
				<p>{data.list.text}</p>

				<ul>
					{data.list.items.map((item) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Main;

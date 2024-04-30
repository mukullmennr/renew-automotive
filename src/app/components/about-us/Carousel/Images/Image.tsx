"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./image.module.scss";

const imageData = [
	{
		id: "uuid1",
		link: "/carousel/c1.png",
	},
	{
		id: "uuid2",
		link: "/carousel/c2.png",
	},
	{
		id: "uuid3",
		link: "/carousel/c3.png",
	},
	{
		id: "uuid4",
		link: "/carousel/c4.png",
	},
	{
		id: "uuid5",
		link: "/carousel/c1.png",
	},
	{
		id: "uuid6",
		link: "/carousel/c2.png",
	},
	{
		id: "uuid7",
		link: "/carousel/c3.png",
	},
	{
		id: "uuid8",
		link: "/carousel/c4.png",
	},
];

type ImageState = {
	id: string;
	link: string;
}[];

const Image = () => {
	const [images, setImages] = useState<ImageState>();
	const [vw, setVW] = useState<number>(0);
	const [imageDisplayCount, setImageDisplayCount] = useState(0);
	const [imageControlCount, setImageControlCount] = useState(0);
	const [imageContainerWidth, setImageContainerWidth] = useState(0);

	const imageContainerRef = useRef<HTMLDivElement | null>(null);

	const countRef = useRef(0);

	useEffect(() => {
		setImages(imageData);

		// media queries
		let lg = window.matchMedia("(min-width: 64em)");
		let md = window.matchMedia("(min-width: 40em)");

		new ResizeObserver(() => {
			let vw = document.documentElement.clientWidth / 100;
			setVW(vw);

			// count displayed images
			let tempCount;

			if (lg.matches) {
				tempCount = 4;
			} else if (md.matches) {
				tempCount = 3;
			} else {
				tempCount = 2;
			}

			setImageDisplayCount(tempCount);
		}).observe(document.documentElement);
	}, []);

	useEffect(() => {
		// image control count
		// imageLength - imageDisplayCount + 1;
		let tempImageLength = images ? images.length : 0;
		let tempImageControlCount = tempImageLength - imageDisplayCount + 1;

		setImageControlCount(tempImageControlCount);

		if (imageContainerRef.current) {
			imageContainerRef.current.style.setProperty(
				"--_imageCount",
				String(tempImageLength)
			);
		}
	}, [imageDisplayCount, images]);

	useEffect(() => {
		let tempImageLength = images ? images.length : 0;
		let tempImageContainerWidth =
			tempImageLength * ((100 * vw) / imageDisplayCount);

		setImageContainerWidth(tempImageContainerWidth);
	}, [images, vw, imageDisplayCount]);

	const updateCounter = () => {
		countRef.current++;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			updateCounter();

			let tempImageLength = images ? images.length : 0;
			let initWidth = 100 * vw;
			let left = tempImageLength - imageDisplayCount;

			if (countRef.current > left) countRef.current = 0;

			let maxTranslate = imageContainerWidth - initWidth;
			let increaseTranslate = initWidth / imageDisplayCount;

			let increase = increaseTranslate * countRef.current;

			// console.log(countRef.current);
			// console.info(increaseTranslate);

			increase *= -1;
			imageContainerRef.current?.style.setProperty(
				"--_tx",
				`${increase}px`
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [images, imageDisplayCount]);

	return (
		<div className={styles.image}>
			<div className={styles.images}>
				<div
					className={styles.images_container}
					ref={imageContainerRef}
				>
					{images?.map((image) => {
						return (
							<div key={image.id}>
								<img src={image.link} alt="" />
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles.images_control}></div>
		</div>
	);
};

export default Image;

"use client";

import React from "react";
import styles from "./free-modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface FreeModalProps {
	dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
	closeModal: () => void;
}

const cardsData = [
	{
		discount: "10% OFF",
		text: "Your first repair!",
	},
	{
		discount: "$7 OFF ",
		text: "Full Synthetic Oil Changes",
	},
	{
		discount: "$5 OFF ",
		text: "Conventional Oil Changes",
	},
];

const FreeModal = ({ dialogRef, closeModal }: FreeModalProps) => {
	const cards = cardsData.map((card) => {
		return (
			<div key={card.discount} className={styles.card_item}>
				<h2>{card.discount}</h2>

				<p>{card.text}</p>
			</div>
		);
	});

	return (
		<dialog className={styles.dialog} ref={dialogRef}>
			<div className={styles.menu}>
				<button onClick={closeModal}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</div>

			<div className={styles.content}>
				<h1 className={styles.heading}>FREE</h1>

				<div className={styles.list}>
					<ul>
						<li>Check-engine Light Scan</li>
						<li>Multi-point Inspections</li>
					</ul>
				</div>

				<div className={styles.card}>{cards}</div>
			</div>
		</dialog>
	);
};

export default FreeModal;

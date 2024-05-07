"use client";
import React, { useRef } from "react";
import styles from "./hero.module.scss";
import Container from "@/components/Container/Container";
import Appointments from "@/components/Appointment/Appointments";
const Hero = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };
    return (
        <div className={styles.hero}>
            <Container>
                <div className={styles.container}>
                    <h1 className={styles.heading}>
                        Drive with Confidence: Your One-Stop Solution for Auto
                        Excellence
                    </h1>

                    <p className={styles.text}>
                        At Renew Automotive, we understand that your vehicle is
                        more than just a mode of transportation –That&apos;s why
                        our team of expert mechanics is dedicated to providing
                        quality service that goes beyond just repairs.
                        <span>
                            We&apos;re your partners in ensuring your car runs
                            smoothly, efficiently, and safely for years to come.
                            Whether you need a routine oil change, a major
                            engine overhaul, or anything in between we&apos;ve
                            got you covered. Trust us for expert service and
                            peace of mind on the road.
                        </span>
                    </p>

                    <div className={styles.button}>
                        <button onClick={openModal}>Schedule Service</button>
                    </div>
                </div>
                <Appointments dialogRef={dialogRef} closeModal={closeModal} />
            </Container>
        </div>
    );
};

export default Hero;

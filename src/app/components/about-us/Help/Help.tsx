"use client";
import React, { useRef } from "react";
import style from "./help.module.scss";
import Container from "@/components/Container/Container";
import Appointments from "@/components/Appointment/Appointments";

const Help = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };
    return (
        <div>
            <Container>
                <div className={style.content}>
                    <div>
                        <h4>
                            Need Help With Your Car?{" "}
                            <span>We&apos;ll fix it</span>
                        </h4>
                        <p>
                            We specialise in repairing accident damage to
                            vehicles. In fact, we&apos;re the second largest
                            accident damage repair network.
                        </p>
                    </div>

                    <a href="tel:(470 ) 384 9791">(470 ) 384 9791</a>
                    <button onClick={openModal}>Appointment</button>

                    <div className={style.watermark}>
                        <p>Schedule</p>
                    </div>
                </div>
                <Appointments dialogRef={dialogRef} closeModal={closeModal} />
            </Container>
        </div>
    );
};

export default Help;

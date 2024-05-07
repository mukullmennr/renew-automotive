"use client";
import React, { useRef, useState } from "react";
import style from "./offer.module.scss";
import Line from "@/components/SVG/Line";
import Container from "@/components/Container/Container";
import Appointments from "@/components/Appointment/Appointments";

const Offer = () => {
    const [open, setOpen] = useState(true);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };
    return (
        <Container>
            <div className={style.offer}>
                <div className={style.heading}>
                    <div>
                        <h3>
                            Repair Services That <span>We Offer</span>
                        </h3>
                        <Line />
                    </div>

                    <p>
                        We provide a full range of front end mechanical repairs
                        for all makes and models of cars, no matter the cause.
                        This includes everything from struts, shocks, and tie
                        rod ends to ball joints, springs, and basically
                        everything that is included in repairing the front end
                        of the vehicle.
                    </p>
                    <div className={style.button}>
                        <button onClick={openModal}>Book an Appointment</button>
                    </div>
                </div>
                <div className={style.item1}>
                    <ul>
                        <li>
                            <p>FREE Loaner Cars</p>
                        </li>
                        <li>
                            <p>FREE Shuttle Service</p>
                        </li>
                        <li>
                            {" "}
                            <p>General Auto Repair & Maintenance</p>
                        </li>
                        <li>
                            {" "}
                            <p>Transmission Repair & Replacement</p>
                        </li>
                        <li>
                            {" "}
                            <p>Fuel System Repair</p>
                        </li>
                        <li>
                            <p>Exhaust System Repair</p>
                        </li>
                        <li>
                            {" "}
                            <p>Engine Cooling System Maintenance</p>
                        </li>
                        <li>
                            <p>Electrical Diagnostics</p>
                        </li>
                        <li>
                            {" "}
                            <p>Starting and Charging Repair</p>
                        </li>
                        <li>
                            {" "}
                            <p>Wheel Alignment</p>
                        </li>
                        <li>
                            {" "}
                            <p>CV Axles</p>
                        </li>
                        <li>
                            {" "}
                            <p>Computer Diagnostic Testing</p>
                        </li>
                    </ul>
                </div>
                <div className={style.item2}>
                    <div
                        className={`${style.list} ${open ? style.active : ""}`}
                    >
                        <ul>
                            <li>
                                <p>Manufacturer Recommended Service</p>
                            </li>
                            <li>
                                <p>Brake Repair and Replacement</p>
                            </li>
                            <li>
                                {" "}
                                <p>Air Conditioning A/C Repair</p>
                            </li>
                            <li>
                                {" "}
                                <p>Tire Repair and Replacement</p>
                            </li>
                            <li>
                                {" "}
                                <p>Vehicle Preventative Maintenance</p>
                            </li>
                            <li>
                                <p>State Emissions Inspection</p>
                            </li>
                            <li>
                                {" "}
                                <p>Emission Repair Facility</p>
                            </li>
                            <li>
                                <p>Tune Up</p>
                            </li>
                            <li>
                                {" "}
                                <p>Oil Change</p>
                            </li>
                            <li>
                                {" "}
                                <p>Brake Job / Brake Service</p>
                            </li>
                            <li>
                                {" "}
                                <p>Engine Cooling System Flush & Repair</p>
                            </li>
                            <li>
                                {" "}
                                <p>Steering and Suspension Work</p>
                            </li>
                        </ul>
                    </div>

                    <div className={style.more}>
                        <div className={style.toggle}>
                            <input
                                type="checkbox"
                                id="toggle2"
                                style={{ display: "none" }}
                                checked={open}
                                onChange={() => setOpen((prev) => !prev)}
                            />
                            <label htmlFor="toggle2">
                                <div
                                    className={`${style.content} ${
                                        open ? style.add : ""
                                    }`}
                                >
                                    <span></span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={style.button2}>
                    <button onClick={openModal}>Book an Appointment</button>
                </div>
            </div>
            <Appointments dialogRef={dialogRef} closeModal={closeModal} />
        </Container>
    );
};

export default Offer;

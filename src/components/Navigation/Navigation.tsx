"use client";

import React, { useEffect, useState } from "react";
import styles from "./navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
    faAngleDown,
    faArrowRight,
    faLocationDot,
    faPhoneVolume,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container";
import { useSelectedLayoutSegment } from "next/navigation";
import appointment from "../Appointment/Appointments";
import Appointments from "@/components/Appointment/Appointments";
const links = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/about-us",
        name: "About Us",
    },
    {
        link: "/services",
        name: "Services",
    },
    {
        link: "/reviews",
        name: "Reviews",
    },
    {
        link: "/gallery",
        name: "Gallery",
    },
    {
        link: "/contact-us",
        name: "Contact Us",
    },
];

const Navigation = () => {
    const [active, setActive] = useState(false);
    const segment = useSelectedLayoutSegment();
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        setOpen(false);
    }, [segment]);

    const navLinks = links.map((link) => {
        let slug = "/" + (segment ?? "");
        const isActive = slug === link.link;

        return (
            <li key={link.link} className={`${isActive && styles.active}`}>
                <Link href={link.link}>{link.name}</Link>
            </li>
        );
    });

    return (
        <nav className={styles.nav}>
            <div
                className={`${styles.nav_upper} ${active ? styles.active : ""}`}
            >
                <div className={styles.items_parent}>
                    <div className={styles.items}>
                        <div className={styles.items_child}>
                            <FontAwesomeIcon icon={faClock} />
                            Monday - Friday 08:30 am - 05:30 pm
                        </div>
                        <div className={styles.items_child}>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                            Schedule Your Appointement Today:{" "}
                            <a href="tel:(470 ) 384 9791">(470 ) 384 9791</a>
                        </div>
                        <div className={styles.items_child}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            4337 McBrayer Rd 400, Oakwood, GA 30566
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <div
                        className={styles.show_more}
                        onClick={() => setActive((prev) => !prev)}
                    >
                        {!active ? (
                            <FontAwesomeIcon icon={faAngleDown} />
                        ) : (
                            <FontAwesomeIcon icon={faXmark} />
                        )}
                    </div>

                    <div className={styles.appointment}>
                        <button onClick={() => setShowModal(true)}>
                            <span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            Appointment
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.nav_main}>
                <Container>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Renew Automotive Services"
                                width="162"
                                height="48"
                            />
                        </Link>
                    </div>

                    <div className={styles.nav_items}>
                        <div className={styles.toggle}>
                            <input
                                type="checkbox"
                                id="toggle"
                                style={{ display: "none" }}
                                checked={open}
                                onChange={(e) => setOpen(e.target.checked)}
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>

                        <div className={styles.nav_list}>
                            <ul>{navLinks}</ul>
                        </div>
                    </div>
                </Container>
            </div>
            {showModal && (
                <Appointments
                    onClose={() => setShowModal(false)}
                ></Appointments>
            )}
        </nav>
    );
};

export default Navigation;

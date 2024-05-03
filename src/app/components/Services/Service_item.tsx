"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Container/Container";
import style from "./service_item.module.scss";
const Service_item = () => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [selectedRadio, setSelectedRadio] = useState<number>(0);
    const handleRadioChange = (index: number) => {
        setSelectedRadio(index);
        // Scroll to the selected review
        if (parentRef.current) {
            parentRef.current.scrollTo({
                left: index * parentRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };
    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0.5, // Adjust threshold as needed
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target as HTMLElement;
                    const index = parseInt(
                        targetElement.getAttribute("data-index") || "0",
                        10
                    );

                    setSelectedRadio(index);
                    // console.log(index);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        const innerContentElements = document.querySelectorAll(
            `.${style.items} > div`
        );

        innerContentElements.forEach((element, index) => {
            observer.observe(element);
            element.setAttribute("data-index", index.toString());
        });

        return () => {
            observer.disconnect();
        };
    }, [parentRef.current]);
    return (
        <div>
            <Container>
                <div className={style.items} ref={parentRef}>
                    <div className={style.item}>
                        <a href="/services/engine-repair-services">
                            <div>
                                <img src="/services/s1.png" />
                            </div>
                            <div>
                                <h2> Engine Repair Services</h2>
                                <p>
                                    Comprehensive solutions for engine issues,
                                    ensuring smooth performance.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/air-conditioning-diagonistics">
                            <div>
                                <img src="/services/s2.png" />
                            </div>
                            <div>
                                <h2>
                                    Air Conditioning Diagnostics Service &
                                    Repair
                                </h2>
                                <p>
                                    Professional diagnosis and repair for
                                    vehicle air conditioning systems.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/tune-up-and-maintenance">
                            <div>
                                <img src="/services/s3.png" />
                            </div>
                            <div>
                                <h2>Tune-Ups & Maintenance</h2>
                                <p>
                                    Routine maintenance packages to keep
                                    vehicles in top condition.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/suspension-and-steering">
                            <div>
                                <img src="/services/s4.png" />
                            </div>
                            <div>
                                <h2>Suspension & Steering</h2>
                                <p>
                                    Precision services for improved ride quality
                                    and handling.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/vehicle-multipoint-inspection">
                            <div>
                                <img src="/services/s5.png" />
                            </div>
                            <div>
                                <h2>Vehicle Multipoint Inspection</h2>
                                <p>
                                    Thorough inspections to ensure vehicle
                                    safety and reliability.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/brake-repair-services">
                            <div>
                                <img src="/services/s6.png" />
                            </div>
                            <div>
                                <h2>Brake Repair Services</h2>
                                <p>
                                    Expert solutions to maintain braking
                                    efficiency and safety.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/pre-purchase-inspections">
                            <div>
                                <img src="/services/s7.png" />
                            </div>
                            <div>
                                <h2>Pre-Purchase Inspections</h2>
                                <p>
                                    Detailed inspections to aid in informed
                                    vehicle purchases.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/starters-alternators-battery-services">
                            <div>
                                <img src="/services/s8.png" />
                            </div>
                            <div>
                                <h2>
                                    Starters, Alternators & Battery Services
                                </h2>
                                <p>
                                    Expert services to ensure reliable power
                                    supply and electrical system functionality.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="/services/emissions-repair-services">
                            <div>
                                <img src="/services/s9.png" />
                            </div>
                            <div>
                                <h2>Emissions Repair Services</h2>
                                <p>
                                    Solutions to address emissions-related
                                    issues and ensure compliance with
                                    environmental regulations
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={style.radio}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <input
                            key={index}
                            type="radio"
                            checked={selectedRadio === index}
                            onChange={() => handleRadioChange(index)}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Service_item;

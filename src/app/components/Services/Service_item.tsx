import React from "react";
import Container from "@/components/Container/Container";
import style from "./service_item.module.scss";
const Service_item = () => {
    return (
        <div>
            <Container>
                <div className={style.items}>
                    <div className={style.item}>
                        <a>
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
                        <a>
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
                        <a>
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
                        <a>
                            <div>
                                <img src="/services/s4.png" />
                            </div>
                            <div>
                                <h2>Suspension & Steering:</h2>
                                <p>
                                    Precision services for improved ride quality
                                    and handling.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a>
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
                        <a>
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
                        <a>
                            <div>
                                <img src="/services/s7.png" />
                            </div>
                            <div>
                                <h2>Pre-Purchase Inspections</h2>
                                <p>
                                    {" "}
                                    Detailed inspections to aid in informed
                                    vehicle purchases.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a>
                            <div>
                                <img src="/services/s8.png" />
                            </div>
                            <div>
                                <h2>
                                    {" "}
                                    Starters, Alternators & Battery Services:
                                </h2>
                                <p>
                                    Expert services to ensure reliable power
                                    supply and electrical system functionality.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a>
                            <div>
                                <img src="/services/s9.png" />
                            </div>
                            <div>
                                <h2>Emissions Repair Services:</h2>
                                <p>
                                    Solutions to address emissions-related
                                    issues and ensure compliance with
                                    environmental regulations
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Service_item;

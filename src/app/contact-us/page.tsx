"use client";
import React, { useEffect, useState } from "react";
import Common_hero from "@/components/common_hero/Common_hero";
import { contact } from "../../data/hero";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
import style from "./page.module.scss";
const page = () => {
    const getYear = () => {
        const currentYear = new Date().getFullYear();

        let options = [];

        for (let i = 2001; i <= currentYear; i++) {
            let option = (
                <option key={i} value={i}>
                    {i}
                </option>
            );
            options.push(option);
        }

        return options;
    };
    return (
        <div>
            <Common_hero data={contact} />
            <Container>
                <div className={style.contact}>
                    <div className={style.img}></div>
                    <div className={style.form}>
                        <div className={style.head}>
                            <h2>Get in Touch with Renew Automotive</h2>
                            <p>
                                Need help or have a question? Fill out the form
                                below, and we'll reply promptly.
                            </p>
                        </div>
                        <Line />
                        <div className={style.input}>
                            <div>
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <input type="text" placeholder="Email " />
                            <div>
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <select id="date-dropdown" defaultValue="">
                                    <option
                                        className={style.option}
                                        value=""
                                        disabled
                                    >
                                        Vehicle Year
                                    </option>
                                    {getYear()}
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Vehicle Make" />
                                <input
                                    type="text"
                                    placeholder="Vehicle Model"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="What does your vehicle need?"
                            />
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;

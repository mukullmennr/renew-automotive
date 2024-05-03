"use client";
import React, { useEffect } from "react";
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

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const form = document.querySelector(
            `.${style.input}`
        ) as HTMLFormElement;
        const firstNameInput = form.querySelector(
            'input[name="First_Name"]'
        ) as HTMLInputElement;
        const lastNameInput = form.querySelector(
            'input[name="Last_Name"]'
        ) as HTMLInputElement;
        const name = `${firstNameInput.value} ${lastNameInput.value}`;

        form?.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            data["name"] = name;
            delete data["First_Name"];
            delete data["Last_Name"];
            console.log(data);
        });
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
                        <form className={style.input} onSubmit={handleSubmit}>
                            <div>
                                <input
                                    name="First_Name"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    name="Last_Name"
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <input
                                name="email"
                                type="text"
                                placeholder="Email "
                                required
                            />
                            <div>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    required
                                />
                                <select
                                    name="vehicleYear"
                                    id="date-dropdown"
                                    defaultValue=""
                                    required
                                >
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
                                <input
                                    name="vehicleMake"
                                    type="text"
                                    placeholder="Vehicle Make"
                                    required
                                />
                                <input
                                    name="vehicleModel"
                                    type="text"
                                    placeholder="Vehicle Model"
                                    required
                                />
                            </div>
                            <input
                                name="vehicleRequirement"
                                type="text"
                                placeholder="What does your vehicle need?"
                            />
                            <button type="submit">Contact Us</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;

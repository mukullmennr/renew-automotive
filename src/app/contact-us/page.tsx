"use client";
import React, { useEffect, useState } from "react";
import Common_hero from "@/components/common_hero/Common_hero";
import { contact } from "../../data/hero";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
import style from "./page.module.scss";

type Data = {
    name: string;
    email: string;
    phoneNumber: string;
    vehicleYear: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleRequirement?: string;
};

const page = () => {
    const [userInput, setUserInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        vehicleYear: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleRequirement: "",
    });

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

        // input sanitize
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            vehicleMake,
            vehicleModel,
            vehicleRequirement,
            vehicleYear,
        } = userInput;

        let data: Data = {
            name: firstName + " " + lastName,
            email,
            phoneNumber,
            vehicleMake,
            vehicleModel,
            vehicleYear,
        };

        if (vehicleRequirement.length > 0) {
            data = {
                ...data,
                vehicleRequirement,
            };
        }

        const method = "POST";
        const endpoint = "https://api.mennr.tech/contact-us";

        const headers = {
            "Content-Type": "application/json; charset=UTF-8",
        };

        const body = JSON.stringify(data);

        fetch(endpoint, {
            method,
            headers,
            body,
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.error) {
                    throw new Error(res.message);
                }

                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const key = e.target.name;
        const value = e.target.value;

        setUserInputs((prev) => {
            return { ...prev, [key]: value };
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
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    value={userInput.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    value={userInput.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email "
                                required
                                value={userInput.email}
                                onChange={handleChange}
                            />
                            <div>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    required
                                    inputMode="numeric"
                                    value={userInput.phoneNumber}
                                    onChange={handleChange}
                                />

                                <select
                                    name="vehicleYear"
                                    id="date-dropdown"
                                    value={userInput.vehicleYear}
                                    required
                                    onChange={handleChange}
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
                                    value={userInput.vehicleMake}
                                    onChange={handleChange}
                                />
                                <input
                                    name="vehicleModel"
                                    type="text"
                                    placeholder="Vehicle Model"
                                    required
                                    value={userInput.vehicleModel}
                                    onChange={handleChange}
                                />
                            </div>
                            <textarea
                                name="vehicleRequirement"
                                placeholder="What does your vehicle need?"
                                value={userInput.vehicleRequirement}
                                onChange={handleChange}
                                rows={5}
                                style={{
                                    resize: "none",
                                }}
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

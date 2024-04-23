import React from "react";
import Container from "@/components/Container/Container";
import style from "./page.module.scss";
const page = () => {
    return (
        <div>
            <div className={style.nav}>
                <ul>
                    <li>
                        <input
                            hidden
                            type="radio"
                            name="carousel-control"
                            id="button_a"
                            checked
                        />
                        <label htmlFor="button_a" className="label_a">
                            <span>All</span>
                        </label>
                    </li>
                    <li>
                        <input
                            hidden
                            type="radio"
                            name="carousel-control"
                            id="button_b"
                        />
                        <label htmlFor="button_b" className="label_a">
                            <span>Vehicle Repair</span>
                        </label>
                    </li>
                    <li>
                        <input
                            hidden
                            type="radio"
                            name="carousel-control"
                            id="button_c"
                        />
                        <label htmlFor="button_c" className="label_a">
                            <span>Other</span>
                        </label>
                    </li>
                    <li>
                        <input
                            hidden
                            type="radio"
                            name="carousel-control"
                            id="button_d"
                        />
                        <label htmlFor="button_d" className="label_a">
                            <span>Car Maintenance</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default page;

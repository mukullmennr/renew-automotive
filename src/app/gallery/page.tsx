"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/Container/Container";
import style from "./page.module.scss";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
const page = () => {
    const [selected, setSelected] = useState<string | null>("button_a");
    const handleRadioChange = (value: string) => {
        setSelected(value);
    };

    return (
        <div className={style.container}>
            <div className={style.nav}>
                <div className={style.item}>
                    <input
                        hidden
                        type="radio"
                        name="carousel-control"
                        id="button_a"
                        checked={selected === "button_a"}
                        onChange={() => handleRadioChange("button_a")}
                    />
                    <label htmlFor="button_a" className="label_a">
                        <span>All</span>
                    </label>
                </div>
                <div className={style.item}>
                    <input
                        hidden
                        type="radio"
                        name="carousel-control"
                        id="button_b"
                        checked={selected === "button_b"}
                        onChange={() => handleRadioChange("button_b")}
                    />
                    <label htmlFor="button_b" className="label_a">
                        <span>Vehicle Repair</span>
                    </label>
                </div>
                <div className={style.item}>
                    <input
                        hidden
                        type="radio"
                        name="carousel-control"
                        id="button_c"
                        checked={selected === "button_c"}
                        onChange={() => handleRadioChange("button_c")}
                    />
                    <label htmlFor="button_c" className="label_a">
                        <span>Other</span>
                    </label>
                </div>
                <div className={style.item}>
                    <input
                        hidden
                        type="radio"
                        name="carousel-control"
                        id="button_d"
                        checked={selected === "button_d"}
                        onChange={() => handleRadioChange("button_d")}
                    />
                    <label htmlFor="button_d" className="label_a">
                        <span>Car Maintenance</span>
                    </label>
                </div>
            </div>
            <div className={style.content}>
                {selected === "button_a" && (
                    <div>
                        <LightGallery
                            speed={500}
                            plugins={[]}
                            elementClassNames={style.item1}
                        >
                            <a href="/gallery/g1.png">
                                <img src="/gallery/g1.png"></img>
                            </a>

                            <a href="/gallery/g2.png">
                                <img src="/gallery/g2.png"></img>
                            </a>

                            <a href="/gallery/g3.png">
                                <img src="/gallery/g3.png"></img>
                            </a>

                            <a href="/gallery/g4.png">
                                <img src="/gallery/g4.png"></img>
                            </a>

                            <a href="/gallery/g5.png">
                                <img src="/gallery/g5.png"></img>
                            </a>

                            <a href="/gallery/g6.png">
                                <img src="/gallery/g6.png"></img>
                            </a>

                            <a href="/gallery/g7.png">
                                <img src="/gallery/g7.png"></img>
                            </a>
                        </LightGallery>
                    </div>
                )}

                {selected === "button_b" && (
                    <div>
                        <LightGallery
                            speed={500}
                            plugins={[]}
                            elementClassNames={style.item1}
                        >
                            <a href="/gallery/g2.png">
                                <img src="/gallery/g2.png"></img>
                            </a>
                            <a href="/gallery/g6.png">
                                <img src="/gallery/g6.png"></img>
                            </a>
                        </LightGallery>
                    </div>
                )}
                {selected === "button_c" && (
                    <div>
                        <LightGallery
                            speed={500}
                            plugins={[]}
                            elementClassNames={style.item1}
                        >
                            <a href="/gallery/g2.png">
                                <img src="/gallery/g2.png"></img>
                            </a>
                            <a href="/gallery/g3.png">
                                <img src="/gallery/g3.png"></img>
                            </a>

                            <a href="/gallery/g4.png">
                                <img src="/gallery/g4.png"></img>
                            </a>

                            <a href="/gallery/g5.png">
                                <img src="/gallery/g5.png"></img>
                            </a>

                            <a href="/gallery/g6.png">
                                <img src="/gallery/g6.png"></img>
                            </a>
                        </LightGallery>
                    </div>
                )}
                {selected === "button_d" && (
                    <div>
                        <LightGallery
                            speed={500}
                            plugins={[]}
                            elementClassNames={style.item1}
                        >
                            <a href="/gallery/g1.png">
                                <img src="/gallery/g1.png"></img>
                            </a>
                            <a href="/gallery/g4.png">
                                <img src="/gallery/g4.png"></img>
                            </a>

                            <a href="/gallery/g5.png">
                                <img src="/gallery/g5.png"></img>
                            </a>
                            <a href="/gallery/g7.png">
                                <img src="/gallery/g7.png"></img>
                            </a>
                            <a href="/gallery/g3.png">
                                <img src="/gallery/g3.png"></img>
                            </a>
                        </LightGallery>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;

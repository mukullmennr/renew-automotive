"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./carousel.module.scss";
import Container from "@/components/Container/Container";
const Carousel = () => {
    return (
        <div className={style.carousel}>
            <Container>
                <div className={style.content}>
                    <h2>
                        Our Service <span>Gallery</span>
                    </h2>
                    <p>
                        These photos will help you learn more about our car
                        service and services provided
                    </p>
                </div>
            </Container>
            <div className={style.carousel_content}>
                <div className={style.slides}>
                    <div className={style.slide}>
                        <img src="/carousel/c1.png" alt="" />
                        <img src="/carousel/c2.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c3.png" alt="" />
                        <img src="/carousel/c4.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c1.png" alt="" />
                        <img src="/carousel/c2.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c3.png" alt="" />
                        <img src="/carousel/c4.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c1.png" alt="" />
                        <img src="/carousel/c2.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c3.png" alt="" />
                        <img src="/carousel/c4.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c1.png" alt="" />
                        <img src="/carousel/c2.png" alt="" />
                    </div>
                    <div className={style.slide}>
                        <img src="/carousel/c3.png" alt="" />
                        <img src="/carousel/c4.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                {/* <div>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                        <input key={index} type="radio" />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Carousel;

"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./page.module.scss";
import Common_hero from "@/components/common_hero/Common_hero";
import { reviews } from "../../data/hero";
import Container from "@/components/Container/Container";
import Script from "next/script";
const page = () => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [selectedRadio, setSelectedRadio] = useState<number>(0);

    // Automatic carousel
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const intervalTime = 5000; // Time between slides

    useEffect(() => {
        const slides = document.querySelectorAll(`.${style.item}`);
        const totalSlides = slides.length;

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        };

        const intervalId = setInterval(nextSlide, intervalTime);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        updateSlide();
    }, [currentIndex]);

    const updateSlide = () => {
        const offset = -100 * currentIndex + "%";
        const slidesContainer = parentRef.current?.querySelector(
            `.${style.slides}`
        ) as HTMLElement | null;
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(${offset})`;
        }
    };

    const handleRadioChange = (index: number) => {
        setSelectedRadio(index);
        setCurrentIndex(index);
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
            `.${style.slides} > div`
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
            <Common_hero data={reviews} />
            <div className={style.review} ref={parentRef}>
                <Container>
                    {/* <div className={style.testimonial}>
                        <p>Testimonials</p>
                    </div> */}
                    <div className={style.slides}>
                        <div className={style.item} id="form-0">
                            <div>
                                <img src="/review3.png" alt="" />
                            </div>
                            <div>
                                <img src="/review_icon.svg" alt="" />
                            </div>
                            <p>
                                Took my daughters car for a tune-up before going
                                to college. And then my car for an oil change.
                                They did a great job, sent pictures and
                                didn&apos;t give me a long list of things that
                                needed to be done like others always do! I will
                                definitely be returning and sending my friends!
                            </p>
                            <p>
                                <span>- Pam Smith</span>
                            </p>
                        </div>
                        <div className={style.item} id="form-1">
                            <div>
                                <img src="/review1.png" alt="" />
                            </div>
                            <div>
                                <img src="/review_icon.svg" alt="" />
                            </div>

                            <p>
                                Amazing went over and beyond to help me
                                respectable work in a timely fashion defiantly
                                will be back and telling all my friends and
                                family under new ownership and they are awesome
                                very blessed people
                            </p>
                            <p>
                                <span>- hannah savannuh</span>
                            </p>
                        </div>
                        <div className={style.item} id="form-2">
                            <div>
                                <img src="/review2.png" alt="" />
                            </div>
                            <div>
                                <img src="/review_icon.svg" alt="" />
                            </div>
                            <p>
                                They did an big & awesome job for me. They
                                swapped out engines on my expedition.
                                Exceptional quality, knowledge and thorough. Now
                                I’ve asked them to do more. I highly recommend
                                them.
                            </p>
                            <p>
                                <span>- Jerry Collins</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.radio}>
                        {[0, 1, 2].map((index) => (
                            <>
                                <input
                                    key={index}
                                    type="radio"
                                    id={index.toString()}
                                    checked={selectedRadio === index}
                                    onChange={() => handleRadioChange(index)}
                                />
                                <label htmlFor={index.toString()} key={index}>
                                    <span></span>
                                </label>
                            </>
                        ))}
                        {/* {[0, 1, 2].map((index) => (
                   
                ))} */}
                    </div>
                </Container>
            </div>

            <Container>
                <div className={style.google_review}>
                    <Script
                        src="https://static.elfsight.com/platform/platform.js"
                        data-use-service-core
                        defer
                    />
                    <div
                        className="elfsight-app-b604947e-16f9-41d1-80ed-7dfe624204f0"
                        data-elfsight-app-lazy
                    ></div>
                </div>
            </Container>
        </div>
    );
};

export default page;

"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./reviews.module.scss";
export const Reviews = () => {
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
            `.${style.review_container} > div`
        );

        innerContentElements.forEach((element, index) => {
            observer.observe(element);
            element.setAttribute("data-index", index.toString());
        });

        return () => {
            observer.disconnect();
        };
    }, [parentRef.current]);
    const handlePrevClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft -= 400;
    };

    const handleNextClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft += 400;
    };
    return (
        <div>
            <div className={style.experience}>
                <div className={style.content}>
                    <div className={style.num}>
                        <p>20</p>
                    </div>
                    <div className={style.var}>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.num}>
                        <p>2.9k</p>
                    </div>
                    <div className={style.var}>
                        <p>Vehicle Repaired</p>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.num}>
                        <p>32</p>
                    </div>
                    <div className={style.var}>
                        <p>Technicians & Workers</p>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.num}>
                        <p>100%</p>
                    </div>
                    <div className={style.var}>
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </div>
            <div className={style.review}>
                <div className={style.review_img}>
                    <img src="/review.png" alt="" />
                </div>
                <div className={style.content}>
                    <div className={style.container}>
                        <div className={style.heading}>
                            <h4>Customer Reviews</h4>
                            <div className={style.icon}>
                                <img src="/review_icon.svg" />
                            </div>
                        </div>
                        <div className={style.icon}>
                            <img src="/review_icon.svg" />
                        </div>
                        <div className={style.review_container} ref={parentRef}>
                            <div className={style.item}>
                                <div className={style.star}>
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                </div>
                                <div className={style.para}>
                                    <p>
                                        I would recommend Car Repair Service to
                                        anyone without a doubt! Very
                                        professional and reliable. The best
                                        customer service and reasonable prices.
                                        My go to auto shop from now on!!!
                                    </p>
                                </div>
                                <div className={style.name}>
                                    <p>
                                        <span>– Jeffrey Holton,</span>{" "}
                                        Electrician
                                    </p>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.star}>
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                </div>
                                <div className={style.para}>
                                    <p>
                                        Absolutely stellar service!
                                        Professionalism and reliability define
                                        this company. Their customer service is
                                        top-notch, and their prices are fair. My
                                        definite go-to for all automobile needs.
                                        Highly recommend without hesitation!
                                    </p>
                                </div>
                                <div className={style.name}>
                                    <p>
                                        <span>– Jeffrey Holton,</span>{" "}
                                        Electrician
                                    </p>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.star}>
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                </div>
                                <div className={style.para}>
                                    <p>
                                        Exceptional service every time!
                                        Trustworthy, reliable, and fair pricing.
                                        This company goes above and beyond for
                                        their customers. My number one choice
                                        for all automotive needs. Highly
                                        recommended!
                                    </p>
                                </div>
                                <div className={style.name}>
                                    <p>
                                        <span>– Jeffrey Holton,</span>{" "}
                                        Electrician
                                    </p>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.star}>
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                    <img src="/star.svg" />
                                </div>
                                <div className={style.para}>
                                    <p>
                                        Consistently excellent service!
                                        Professional, reliable, and fair pricing
                                        make them stand out. Their commitment to
                                        customer satisfaction is unmatched. A
                                        trusted partner for all automotive
                                        needs. Highly recommended!
                                    </p>
                                </div>
                                <div className={style.name}>
                                    <p>
                                        <span>– Jeffrey Holton,</span>{" "}
                                        Electrician
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.controller}>
                            <div className={style.radio}>
                                {[0, 1, 2, 3].map((index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        checked={selectedRadio === index}
                                        onChange={() =>
                                            handleRadioChange(index)
                                        }
                                    />
                                ))}
                            </div>
                            <div className={style.button}>
                                <button onClick={handlePrevClick}>
                                    {" "}
                                    <img src="/arrow_left.svg" alt="<" />
                                </button>
                                <button onClick={handleNextClick}>
                                    <img src="/arrow_right.svg" alt="." />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
function setSelectedRadio(index: number) {
    throw new Error("Function not implemented.");
}

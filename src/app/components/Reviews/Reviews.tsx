"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./reviews.module.scss";
export const Reviews = () => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const [selectedRadio, setSelectedRadio] = useState<number>(0);
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
                    console.log(index);
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
                    <div className={style.heading}>
                        <h4>Customer Reviews</h4>
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
                                    anyone without a doubt! Very professional
                                    and reliable. The best customer service and
                                    reasonable prices. My go to auto shop from
                                    now on!!!
                                </p>
                            </div>
                            <div className={style.name}>
                                <p>
                                    <span>– Jeffrey Holton,</span> Electrician
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
                                    I would recommend Car Repair Service to
                                    anyone without a doubt! Very professional
                                    and reliable. The best customer service and
                                    reasonable prices. My go to auto shop from
                                    now on!!!
                                </p>
                            </div>
                            <div className={style.name}>
                                <p>
                                    <span>– Jeffrey Holton,</span> Electrician
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
                                    I would recommend Car Repair Service to
                                    anyone without a doubt! Very professional
                                    and reliable. The best customer service and
                                    reasonable prices. My go to auto shop from
                                    now on!!!
                                </p>
                            </div>
                            <div className={style.name}>
                                <p>
                                    <span>– Jeffrey Holton,</span> Electrician
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
                                    I would recommend Car Repair Service to
                                    anyone without a doubt! Very professional
                                    and reliable. The best customer service and
                                    reasonable prices. My go to auto shop from
                                    now on!!!
                                </p>
                            </div>
                            <div className={style.name}>
                                <p>
                                    <span>– Jeffrey Holton,</span> Electrician
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.controller}>
                        <div className={style.radio}>
                            <input
                                type="radio"
                                // id={`radio-${index}-0`}
                                // name={`contentRadio-${index}`}
                                checked={[0].includes(selectedRadio)}
                                onChange={() => {}}
                            />
                            <input
                                type="radio"
                                // id={`radio-${index}-1`}
                                // name={`contentRadio-${index}`}
                                checked={[1].includes(selectedRadio)}
                                onChange={() => {}}
                            />
                            <input
                                type="radio"
                                // id={`radio-${index}-2`}
                                // name={`contentRadio-${index}`}
                                checked={[2].includes(selectedRadio)}
                                onChange={() => {}}
                            />
                            <input
                                type="radio"
                                // id={`radio-${index}-2`}
                                // name={`contentRadio-${index}`}
                                checked={[3].includes(selectedRadio)}
                                onChange={() => {}}
                            />
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

import React from "react";
import style from "./page.module.scss";
import Common_hero from "@/components/common_hero/Common_hero";
import { reviews } from "../../data/hero";
import Container from "@/components/Container/Container";
import Script from "next/script";
const page = () => {
    return (
        <div>
            <Common_hero data={reviews} />
            <div className={style.review}>
                <Container>
                    {/* <div className={style.testimonial}>
                        <p>Testimonials</p>
                    </div> */}
                    <div className={style.slides}>
                        <div className={style.item}>
                            <div>
                                <img src="/review3.png" alt="" />
                            </div>
                            <div>
                                <img src="/review_icon.svg" alt="" />
                            </div>
                            <p>
                                Took my daughters car for a tune-up before going
                                to college. And then my car for an oil change.
                                They did a great job, sent pictures and didn't
                                give me a long list of things that needed to be
                                done like others always do! I will definitely be
                                returning and sending my friends!
                            </p>
                            <p>
                                <span>- Pam Smith</span>
                            </p>
                        </div>
                        <div className={style.item}>
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
                        <div className={style.item}>
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

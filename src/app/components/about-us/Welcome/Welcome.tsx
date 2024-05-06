import React from "react";
import style from "./welcome.module.scss";
import Container from "@/components/Container/Container";
import Line from "@/components/SVG/Line";
const Welcome = () => {
    return (
        <div>
            <Container>
                <div className={style.welcome}>
                    <div className={style.img}>
                        <img src="/about_us.png" alt="" />
                    </div>
                    <div className={style.content}>
                        <h2>
                            <span>Welcome To Renew Automotive:</span> Your
                            Premier Destination for Expert Vehicle Care!
                        </h2>
                        <Line />
                        <div className={style.para}>
                            <p>
                                Renew Automotive is not just an automotive
                                service provider; we are your committed partner
                                in ensuring your vehicle&apos;s performance and
                                longevity.
                            </p>
                            <p>
                                We were founded with a vision to redefine
                                automotive care, and for many years, we have
                                been serving our community with excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.our}>
                    <div className={style.item}>
                        <h4>
                            Our <span>Commitment</span>
                        </h4>
                        <p>
                            At Renew Automotive, we believe that every vehicle
                            deserves the highest standard of care. Therefore, we
                            have a team of passionate professionals dedicated to
                            delivering expert service with a personal touch.
                            Whether it&apos;s routine maintenance or complex
                            repairs, we are here to ensure that your vehicle
                            receives the attention it deserves.
                        </p>
                    </div>
                    <div className={style.item}>
                        <h4>
                            Our <span>Driving Force</span>
                        </h4>
                        <p>
                            Our driving force is your satisfaction. We are
                            committed to exceeding your expectations by
                            providing transparent communication, reliable
                            service, and peace of mind with every visit. Whether
                            you need a routine oil change or a significant
                            repair, you can trust Renew Automotive to deliver
                            exceptional results.
                        </p>
                    </div>
                    <div className={style.item}>
                        <h4>
                            Our <span>Promise</span>
                        </h4>
                        <p>
                            When you choose Renew Automotive, you&apos;re not
                            only selecting a service provider; you&apos;re
                            choosing a partner you can rely on. Our promise to
                            you is simple: to provide expert service,
                            convenience, and peace of mind so you can hit the
                            road with confidence.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;

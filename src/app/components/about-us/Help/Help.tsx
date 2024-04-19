import React from "react";
import style from "./help.module.scss";
import Container from "@/components/Container/Container";
const Help = () => {
    return (
        <div>
            <Container>
                <div className={style.content}>
                    <div>
                        <h4>
                            Need Help With Your Car? <span>We'll fix it</span>
                        </h4>
                        <p>
                            We specialise in repairing accident damage to
                            vehicles. In fact, we're the second largest accident
                            damage repair network.
                        </p>
                    </div>

                    <a href="tel:(470 ) 384 9791">(470 ) 384 9791</a>
                    <button>Appointment</button>
                    <div className={style.watermark}>
                        <p>Schedule</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Help;

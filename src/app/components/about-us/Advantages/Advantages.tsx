import React from "react";
import style from "./advantages.module.scss";
import Line from "@/components/SVG/Line";
const Advantages = () => {
    return (
        <div className={style.advantage}>
            <div>
                <div>
                    <h4>
                        Advantages of <span>Our Service</span>
                    </h4>
                    <Line />
                    <p>
                        Auto servicing your car is an essential task that should
                        not be ignored or forgotten.
                    </p>
                </div>
            </div>
            <div className={style.item}>
                <div>
                    <img src="/person.svg" alt="icon" />
                    <div>
                        <h4>Expert Technicians</h4>
                        <p>
                            Our certified technicians are trained to handle all
                            your vehicle needs with precision and expertise.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.item}>
                <div>
                    <img src="/thumbs_up.svg" alt="icon" />
                    <div>
                        <h4>Convenience</h4>
                        <p>
                            Flexible scheduling options to suit your busy
                            lifestyle.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.item}>
                <div>
                    <img src="/fan.svg" alt="icon" />
                    <div>
                        <h4>Peace of Mind</h4>
                        <p>
                            Drive away knowing your vehicle is in safe hands.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;

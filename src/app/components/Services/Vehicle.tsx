import React from "react";
import Container from "@/components/Container/Container";
import style from "./vehicle.module.scss";
const Vehicle = () => {
    return (
        <div className={style.vehicle}>
            <Container>
                <div className={style.content}>
                    <h3>
                        Vehicle damage? <span>We'll fix it</span>
                    </h3>
                    <p>
                        We specialize in car repair. We're the one of largest
                        accident damage repair network
                    </p>
                    <a href="tel:(470 ) 384 9791">(470 ) 384 9791</a>
                    <button>Need Help?</button>
                </div>
            </Container>
        </div>
    );
};

export default Vehicle;

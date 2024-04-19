import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Faqs from "./components/Faqs/Faqs";
import { Reviews } from "./components/Reviews/Reviews";
const page = () => {
    return (
        <div className="group">
            <Hero />
            <Services />
            <Reviews />
            <Faqs />
            <Automobiles />
        </div>
    );
};

export default page;

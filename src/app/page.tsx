import Automobiles from "./components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";
import Faqs from "./components/Faqs/Faqs";
const page = () => {
    // return (
    //     <div className="group">
    //         <Automobiles />
    //     </div>
    // );
    return (
        <div className="group">
            <Hero />
            <Faqs />
            <Automobiles />
        </div>
    );
};

export default page;

import { Automobiles } from "@/app/components/Automobiles/Automobiles";
import React from "react";
import Hero from "./components/Hero/Hero";

const page = () => {
    // return (
    //     <div className="group">
    //         <Automobiles />
    //     </div>
    // );
    return (
        <div className="group">
            <Hero />
            <Automobiles />
        </div>
    );
};

export default page;

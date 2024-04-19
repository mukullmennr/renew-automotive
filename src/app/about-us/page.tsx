import React from "react";
import Welcome from "../components/about-us/Welcome/Welcome";
import Advantages from "../components/about-us/Advantages/Advantages";
import Help from "../components/about-us/Help/Help";
const page = () => {
    return (
        <div>
            <Welcome />
            <Advantages />
            <Help />
        </div>
    );
};

export default page;

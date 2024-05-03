import React from "react";
import Common_hero from "@/components/common_hero/Common_hero";
import { services } from "../../data/hero";
import Vehicle from "../components/Services/Vehicle";
import Service_item from "../components/Services/Service_item";
import Offer from "../components/Services/Offer";
const page = () => {
    return (
        <div>
            <Common_hero data={services} />
            <Service_item />
            <Vehicle />
            <Offer />
        </div>
    );
};

export default page;

"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./services.module.scss";
import Diagnostic from "@/components/SVG/Diagnostic";
import EngineRepair from "@/components/SVG/EngineRepair";
import OilLube from "@/components/SVG/OilLube";
import Tire from "@/components/SVG/Tire";
import Transmission from "@/components/SVG/Transmission";
import Battries from "@/components/SVG/Battries";
import Link from "next/link";
import Info from "@/components/SVG/Info";

const data = [
    {
        title: "Emissions",
        text: "Our skilled technicians utilize advanced diagnostic tools to quickly identify any issues with your vehicle.",
        image: "/services/emission.png",
        link: "/services/emissions-repair-services",
    },
    {
        title: "Engine Repair",
        text: "Whether it's minor adjustments or major overhauls, we approach every repair with precision and care to ensure that your vehicle runs smoothly.",
        image: "/services/engine-repair.png",
        link: "/services/engine-repair-services",
    },
    {
        title: "Oil / Lube / Filters",
        text: "Ensure the longevity of your vehicle with our expert oil, lube, and filter services, designed to keep your engine running smoothly.",
        image: "/services/oil-lube.png",
        link: "/services/tune-up-and-maintenance",
    },
    {
        title: "Brakes",
        text: "We ensure your vehicles brake pads, rotors, and brake lines are all in working order so you can drive with confidence.",
        image: "/services/brakes.png",
        link: "/services/brake-repair-services",
    },
    {
        title: "Suspension",
        text: "Our expert technicians will thoroughly inspect and replace your suspension for optimal performance.",
        image: "/services/suspension.png",
        link: "/services/suspension-and-steering",
    },
    {
        title: "Batteries",
        text: "We ensure reliable starting power and electrical system performance, so you can hit the road with confidence, knowing your vehicle is ready for any journey",
        image: "/services/battery.png",
        link: "/services/starters-alternators-battery-services",
    },
];

const ServiceGroup = () => {
    const getSVG = (title: string) => {
        switch (title) {
            case "Emissions":
                return <Diagnostic />;
            case "Engine Repair":
                return <EngineRepair />;
            case "Oil / Lube / Filters":
                return <OilLube />;
            case "Brakes":
                return <Tire />;
            case "Suspension":
                return <Transmission />;
            case "Batteries":
                return <Battries />;
        }
    };

    const triggers = data.map(({ title }) => {
        return (
            <Tabs.Trigger value={title} key={title} className={styles.trigger}>
                {getSVG(title)}
                {title}
            </Tabs.Trigger>
        );
    });

    const content = data.map(({ title, text, image, link }) => {
        return (
            <Tabs.Content value={title} key={text} className={styles.content}>
                <div className={styles.overlay}>
                    <Info />

                    <p className={styles.overlay_text}>{text}</p>
                </div>

                <img
                    // width="864"
                    // height="350"
                    width="309"
                    height="125"
                    src={image}
                    alt="service showcase"
                />

                <div className={styles.link}>
                    <Link href={link}>Know More</Link>
                </div>
            </Tabs.Content>
        );
    });

    return (
        <Tabs.Root defaultValue={data[0].title} className={styles.tab}>
            <Tabs.List aria-label="services tabs" className={styles.tab_list}>
                <div>{triggers}</div>
            </Tabs.List>
            {content}
        </Tabs.Root>
    );
};

export default ServiceGroup;

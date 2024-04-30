import React from "react";
import styles from "./common_hero.module.scss";
import Link from "next/link";
interface hero {
    data: {
        heading: string[];
        link: string;
    };
}
const Common_hero = ({ data }: hero) => {
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.text}>
                    <h1 style={{ textAlign: "center" }}>{data.heading}</h1>
                    <div className={styles.bread_crumb}>
                        <Link href="/">Home</Link> /{" "}
                        <Link href={data.link}>{data.heading}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Common_hero;

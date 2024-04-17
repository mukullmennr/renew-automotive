import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../Container/Container";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.458860173218!2d-83.90784872436855!3d34.211300273097386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5f2ef33d693bd%3A0x7c5b4c5d4c2e1fe0!2s4337%20McBrayer%20Rd%20%23400%2C%20Oakwood%2C%20GA%2030566%2C%20USA!5e0!3m2!1sen!2sin!4v1713159678003!5m2!1sen!2sin"
                // width="1920"
                height="348"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.sub_footer}>
                <Container>
                    <div className={styles.sub_footer_content}>
                        <div className={styles.logo}>
                            <img src="/white_logo.svg" alt="logo" />
                        </div>
                        <div className={styles.contact}>
                            <h4>Contact Us</h4>
                            <div>
                                <p>(470)3849791</p>
                                <p>contact@renewautomotiveservices.com</p>
                            </div>
                            <div>
                                <p>4337 McBrayer Rd 400, </p>
                                <p>Oakwood, GA 30566</p>
                            </div>
                            <div>
                                <div>
                                    <p>Mon-Fri</p>
                                    <p>08:30 am - 05:30 pm</p>
                                </div>
                                <div>
                                    <p>Saturday</p>
                                    <p>08:30 am - noon (drop-off only)</p>
                                </div>
                                <div>
                                    <p>Sunday</p>
                                    <p>Closed </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav}>
                            <h4>Navigation</h4>
                            <div>
                                <div>
                                    <Link href="">Home</Link>
                                    <Link href="">About Us</Link>
                                    <Link href="">Services</Link>
                                    <Link href="">Privacy Policy</Link>
                                </div>
                                <div>
                                    <Link href="">Gallery</Link>
                                    <Link href="">Contact Us</Link>
                                    <Link href="">Blog</Link>
                                    <Link href="">Disclaimer</Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.get_in_touch}>
                            <h4>Get in Touch</h4>
                            <div>
                                <Link href="" className={styles.facebook}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link href="" className={styles.twitter}>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </Link>
                                <Link href="" className={styles.linkedin}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Link>
                                <Link href="" className={styles.whatsapp}>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className={styles.copy}>
                    <p>
                        Copyright © 2023 , Renew Automotive Services All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

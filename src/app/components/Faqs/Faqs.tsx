"use client";
import React from "react";
import style from "./faqs.module.scss";
import * as Accordion from "@radix-ui/react-accordion";
import Container from "../../../components/Container/Container";
const Faqs = () => {
    return (
        <div>
            <Container>
                <div className={style.faq}>
                    <div className={style.accordion}>
                        <div>
                            <h3>Auto Maintenance FAQs</h3>
                        </div>
                        <div>
                            <Accordion.Root
                                type="single"
                                defaultValue="item-1"
                                collapsible
                                className={style.accordion_root}
                            >
                                <Accordion.Item
                                    value="item-1"
                                    className={style.accordion_item}
                                >
                                    <Accordion.Trigger
                                        className={style.accordion_trigger}
                                    >
                                        <h4>
                                            How often should I have my engine
                                            inspected and tuned up?
                                        </h4>
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Accordion.Trigger>

                                    <Accordion.Content
                                        className={style.accordion_content}
                                    >
                                        <p>
                                            We recommend getting your engine
                                            inspected and tuned up every 30,000
                                            miles, or as recommended by your
                                            vehicle manufacturer, to maintain
                                            optimal performance and efficiency.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item
                                    value="item-2"
                                    className={style.accordion_item}
                                >
                                    <Accordion.Trigger
                                        className={style.accordion_trigger}
                                    >
                                        <h4>
                                            Do you offer multipoint vehicle
                                            inspections?
                                        </h4>
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Accordion.Trigger>

                                    <Accordion.Content
                                        className={style.accordion_content}
                                    >
                                        <p>
                                            We recommend getting your engine
                                            inspected and tuned up every 30,000
                                            miles, or as recommended by your
                                            vehicle manufacturer, to maintain
                                            optimal performance and efficiency.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item
                                    value="item-3"
                                    className={style.accordion_item}
                                >
                                    <Accordion.Trigger
                                        className={style.accordion_trigger}
                                    >
                                        <h4>
                                            Do you offer financing options for
                                            automotive repairs?
                                        </h4>
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Accordion.Trigger>

                                    <Accordion.Content
                                        className={style.accordion_content}
                                    >
                                        <p>
                                            We recommend getting your engine
                                            inspected and tuned up every 30,000
                                            miles, or as recommended by your
                                            vehicle manufacturer, to maintain
                                            optimal performance and efficiency.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item
                                    value="item-4"
                                    className={style.accordion_item}
                                >
                                    <Accordion.Trigger
                                        className={style.accordion_trigger}
                                    >
                                        <h4>
                                            Do you provide warranty coverage for
                                            your services?
                                        </h4>
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Accordion.Trigger>

                                    <Accordion.Content
                                        className={style.accordion_content}
                                    >
                                        <p>
                                            We recommend getting your engine
                                            inspected and tuned up every 30,000
                                            miles, or as recommended by your
                                            vehicle manufacturer, to maintain
                                            optimal performance and efficiency.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </div>
                    </div>
                    <div className={style.appointment}>
                        {/* <img src="/faq.png" alt="" /> */}
                        <div>
                            <h3>Diagnostics, Repairs & Servicing</h3>
                            <button>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faqs;

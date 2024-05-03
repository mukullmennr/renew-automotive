import React from "react";
import Container from "../Container/Container";
import style from "./appointment.module.scss";
interface AppointmentsProps {
    onClose: () => void;
}
const Appointments: React.FC<AppointmentsProps> = ({ onClose }) => {
    const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClose();
    };
    return (
        <div className={style.modal_overlay}>
            <Container>
                <div className={style.modal}>
                    <div>
                        <div className={style.cross}>
                            <button onClick={handleCloseClick}>
                                X<span>Close</span>
                            </button>
                        </div>
                        <div className={style.content}>
                            <div className={style.heading}>
                                <h2>
                                    Schedule <span>Auto Service</span>
                                </h2>
                                <p>
                                    To schedule an appointment give us a call at
                                    (470) 384 9791 or fill out the form below
                                    with your information and requested
                                    services.
                                </p>
                            </div>
                            <div className={style.input}>
                                <div>
                                    <div className={style.input_head}>
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className={style.input_content}>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Contact No. "
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={style.input_head}>
                                        <h3>Car Detail</h3>
                                    </div>
                                    <div className={style.input_content}>
                                        <input
                                            type="text"
                                            placeholder="Vehicle Model"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Vehicle Year"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Vehicle Make"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={style.input_head}>
                                        <h3>Appointment Details</h3>
                                    </div>
                                    <div className={style.input_content}>
                                        <input
                                            type="date"
                                            placeholder="Requested Date"
                                        />
                                        <input
                                            type="time"
                                            placeholder="Vehicle Year"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Anything Else?"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={style.button}>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Appointments;

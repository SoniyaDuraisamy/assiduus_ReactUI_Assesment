import React, { useEffect, useState } from "react";
import './Errormodal.css';

const ErrorModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const Error = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 10,
        background: "rgba(0, 0, 0, 0.75)",
    };

    return (
        <>
            {isModalOpen && (
                <div style={Error}>
                    <div className="error-popup">
                        <p>Submit Your New Sales Report</p>
                        <input className="form-control" type="file" />
                        <button onClick={closeModal}>OK</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ErrorModal;

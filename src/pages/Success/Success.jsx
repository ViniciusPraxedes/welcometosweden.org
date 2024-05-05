import React, { useState } from "react";
import "./Success.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from "react-router-dom";

const Success = () => {

    return (
        <>
            <Navbar />
            <div className="success">
                <div className="card">
                    <CheckCircleIcon className="successIcon"/>
                    <h1>Your account has been created! We've sent a confirmation email to you!</h1>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Success;

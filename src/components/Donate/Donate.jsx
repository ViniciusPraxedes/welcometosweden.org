import React, { useEffect } from "react";
import "./Donate.scss";
import qrcode from './my-qr.png';
import me from './me_myself.png';
import { Link } from "react-router-dom";
import logo from "../Navbar/logo-yellow.png";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Donate = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="donate">
                <div className="donate-wrapper">
                    <div className="creator">
                        <h1>Enjoyed the project? Get in contact!</h1>
                        <p>This project was entirely created by Vinicius Praxedes with the objective of helping expats who want to live in Sweden</p>
                        <img src={me} alt="Vinicius Praxedes" />

                        <div className="getInContact">
                            <h2><a href="https://www.linkedin.com/in/vinicius-praxedes/" target="_blank"><LinkedInIcon className="icon" />Linkedin</a></h2>
                            <h2><a href="mailto:vinipraxedes@hotmail.com" target="_blank"><EmailIcon className="icon" />Email</a></h2>
                            <h2><a href="https://www.viniciuspraxedes.com/" target="_blank"><LanguageIcon className="icon" />Portfolio</a></h2>
                        </div>
                    </div>

                    <div className="swish">
                        <h1>Donate to keep the project going! <VolunteerActivismIcon className="donate-icon" /></h1>
                        <p>Your contribution makes a huge difference in keeping the project going. Every donation, no matter how small, helps me continue the work and cover the hosting costs.</p>
                        <h1>Swish</h1>
                        <h2>Name: Vinicius Praxedes Paixao</h2>
                        <img src={qrcode} alt="qrcode" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Donate;

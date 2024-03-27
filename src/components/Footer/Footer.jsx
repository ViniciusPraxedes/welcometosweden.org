import "./Footer.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import logo from './logo-yellow.png';



const Footer = () => {
    return(
        <div className="footer">

            <div className="footer-wrapper">

                <div className="top">

                    <h1 className="top-left"><VolunteerActivismIcon className="icon"/>  Donate to keep the project going</h1>
                </div>


                <div className="middle">

                    <div className="item">
                        <h2>CONTACT</h2>
                        <a href="mailto:vinipraxedes@hotmail.com" target="_blank">Email</a>
                        <a href="https://www.linkedin.com/in/vinicius-praxedes/" target="_blank">Linkedin</a>
                        <a href="https://www.viniciuspraxedes.com/" target="_blank">Portifolio</a>
                    </div>

                    <div className="item">
                        <h2>ABOUT</h2>
                        <p>Created By Vinicius Praxedes</p>
                    </div>

                    <div className="item">
                        <h2>Topics</h2>
                        <p>Taxes</p>
                        <p>Housing</p>
                        <p>Documentation</p>
                        <p>Banking</p>
                        <p>Jobs</p>
                        <p>Education</p>
                        <p>Language</p>
                    </div>

                    <div className="item">
                        <img src={logo} alt="Logo"/>
                    </div>

                </div>

                <div className="bottom">
                    <h2 className="bottom-left">welcometosweden.org © Copyright 2024. All rights reserved</h2>
                </div>

            </div>

        </div>
    )
}

export default Footer;
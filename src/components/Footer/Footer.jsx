import "./Footer.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import logo from './logo-yellow.png';
import {Link} from "react-router-dom";



const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
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
                        <p>Made with ❤️ by Vinicius Praxedes</p>
                    </div>

                    <div className="item">
                        <h2>Topics</h2>
                        <Link to="/topics/taxes" onClick={scrollToTop}>Taxes</Link>

                        <Link to="/topics/housing" onClick={scrollToTop}>Housing</Link>

                        <Link to="/topics/documents" onClick={scrollToTop}>Documents</Link>

                        <Link to="/topics/banking" onClick={scrollToTop}>Banking</Link>

                        <Link to="/topics/jobs" onClick={scrollToTop}>Jobs</Link>

                        <Link to="/topics/education" onClick={scrollToTop}>Education</Link>

                        <Link to="/topics/language" onClick={scrollToTop}>Language</Link>

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
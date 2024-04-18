import "./Step3.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';
import {Link} from "react-router-dom";




const Step3 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <div className="step3">

            <div className="step3-wrapper">

                <div className="left">

                    <div className="top-left">
                        <img src={logo} alt="Logo"/>
                        <h2>3</h2>
                    </div>

                    <div className="center-left">
                        <h1>Documents</h1>
                        <h2>How to get an ID card</h2>
                        <Link to="/topics/documents"> <button onClick={scrollToTop}>Go to topic</button> </Link>


                    </div>


                </div>

                <div className="right">
                    <img src="https://www.bankid.com/assets/bankid/img/app_id-handlingar.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Step3;
import "./Step1.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';
import {Link} from "react-router-dom";




const Step1 = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="step1">

            <div className="step1-wrapper">

                <div className="left">

                    <div className="top-left">
                        <img src={logo} alt="Logo"/>
                        <h2>1</h2>
                    </div>

                    <div className="center-left">
                        <h1>Move to Sweden</h1>
                        <h2>How to get a residence permit</h2>
                        <Link to="/topics/documents"> <button onClick={scrollToTop}>Go to topic</button> </Link>

                    </div>


                </div>

                <div className="right">
                    <img src="https://images.pexels.com/photos/11330281/pexels-photo-11330281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>

            </div>
        </div>
    )
}

export default Step1;
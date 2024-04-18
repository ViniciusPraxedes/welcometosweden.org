import "./Step4.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';
import {Link} from "react-router-dom";



const Step4 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="step4">

            <div className="step4-wrapper">



                <div className="left">
                    <img src="https://cdn.pixabay.com/photo/2015/12/18/09/28/sweden-1098348_640.jpg"/>
                </div>

                <div className="right">

                    <div className="top-right">
                        <img src={logo} alt="Logo"/>
                        <h2>4</h2>
                    </div>

                    <div className="center-right">
                        <h1>Swedish</h1>
                        <h2>Learn the Swedish language</h2>
                        <Link to="/topics/language"> <button onClick={scrollToTop}>Go to topic</button> </Link>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default Step4;
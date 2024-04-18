import "./Banner.scss";
import img from './nothern.png';
import {Link} from "react-router-dom";



const Banner = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <div className="banner">
            <div className="banner-wrapper">
                <div className="text-container">
                    <h1>Welcome to Sweden.org</h1>
                    <h2>Useful information about life in Sweden</h2>

                    <Link to="/topics"> <button onClick={scrollToTop}>Get started</button> </Link>
                </div>
                <img src={img}/>
            </div>

        </div>
    )
}

export default Banner;
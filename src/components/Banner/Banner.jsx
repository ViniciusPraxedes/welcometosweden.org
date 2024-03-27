import "./Banner.scss";
import img from './nothern.png';



const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-wrapper">
                <div className="text-container">
                    <h1>Welcome to Sweden.org</h1>
                    <h2>Erverything you need to know before you move to Sweden</h2>
                    <button>Get started</button>
                </div>
                <img src={img}/>
            </div>

        </div>
    )
}

export default Banner;
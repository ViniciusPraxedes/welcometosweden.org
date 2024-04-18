import "./Life.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';
import {Link} from "react-router-dom";




const Life = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <div className="life">

            <div className="life-wrapper">

                <div className="left">

                    <div className="top-left">
                    </div>

                    <div className="center-left">
                        <h1>Life in Stockholm</h1>
                        <h2>Stockholm seamlessly blends history with modernity,
                            boasting medieval charm alongside cutting-edge design.
                            From the cobblestone streets of Gamla Stan to its vibrant
                            arts scene and stunning natural surroundings, life in Stockholm
                            offers a perfect balance of cultural richness and sustainable living.
                            Whether wandering through historic alleyways or enjoying the city's green
                            spaces, Stockholm captivates with its unique blend of past and present.</h2>
                        <Link to="/topics"> <button onClick={scrollToTop}>Go to topic</button> </Link>

                    </div>


                </div>

                <div className="right">
                    <img src="https://images.pexels.com/photos/11330281/pexels-photo-11330281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>

            </div>
        </div>
    )
}

export default Life;
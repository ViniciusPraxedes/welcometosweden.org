import "./Study.scss";
import {Link} from "react-router-dom";




const Study= () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <div className="study">

            <div className="study-wrapper">

                <div className="left">

                    <div className="top-left">
                    </div>

                    <div className="center-left">
                        <h1>Studying in Sweden</h1>
                        <h2>Studying in Sweden means embracing a dynamic
                            academic environment in a progressive society.
                            With top-notch programs, emphasis on innovation,
                            and a supportive atmosphere, students gain not just
                            knowledge but also valuable life experiences. Plus,
                            Sweden's commitment to sustainability and equality adds
                            depth to the educational journey.</h2>
                        <Link to="/topics"> <button onClick={scrollToTop}>Go to topic</button> </Link>

                    </div>


                </div>

                <div className="right">
                    <img src="https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/212/wide_fullhd_tina_stafren-higher_education-3814.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Study;
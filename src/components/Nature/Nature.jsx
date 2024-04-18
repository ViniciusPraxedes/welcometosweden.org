import "./Nature.scss";
import {Link} from "react-router-dom";



const Nature = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <div className="nature">
            <div className="nature-wrapper">
                <div className="text-container">
                    <h1>Nature</h1>
                    <h2>Sweden's nature is a breathtaking mosaic of landscapes,
                        from the rugged wilderness of the north to the serene beauty
                        of the south. With pristine forests, crystal-clear lakes, and
                        stunning coastlines, it's a paradise for outdoor enthusiasts.
                        Conservation efforts ensure that its natural wonders remain untouched,
                        inviting locals and visitors alike to immerse themselves in the splendor
                        of Sweden's great outdoors.</h2>
                    <Link to="/topics"> <button onClick={scrollToTop}>Go to topic</button> </Link>

                </div>
                <img src="https://camping.se/sites/cb_camping/files/styles/article_1116_x_537/public/visit-sweden-niclas_vestefjell.jpg?h=71e42331&itok=rH1sfFKn"/>
            </div>

        </div>
    )
}

export default Nature;
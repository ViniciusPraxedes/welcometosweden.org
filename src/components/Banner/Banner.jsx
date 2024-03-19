import "./Banner.scss";


const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-wrapper">
                <div className="text-container">
                    <h1>Welcome to Sweden.org</h1>
                    <h2>Erverything you need to know before you move to Sweden</h2>
                    <button>Get started</button>
                </div>
                <img src="https://media-public.canva.com/MADQ5M0M6gw/1/screen.jpg"/>
            </div>

        </div>
    )
}

export default Banner;
import "./Cost.scss";

const Cost = () => {
    return(
        <div className="cost">
            <h1>Cost of living in the major cities</h1>
            <div className="cost-wrapper">
                <div className="item">
                    <img src="https://a.cdn-hotels.com/gdcs/production160/d1943/a0fe0b3e-1469-412a-a45e-276f65e77702.jpg?impolicy=fcrop&w=800&h=533&q=medium"/>
                    <h2>Stockholm</h2>
                    <button>Go to topic</button>
                </div>
                <div className="item">
                    <img src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/11/Untitled-1024-%C3%97-683px-28.jpg"/>
                    <h2>Gothenburg</h2>
                    <button>Go to topic</button>
                </div>
                <div className="item">
                    <img src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/original_images/Malmo_220922-3461_IBSweb.jpg"/>
                    <h2>Malmö</h2>
                    <button>Go to topic</button>
                </div>
            </div>


        </div>
    )
}

export default Cost;
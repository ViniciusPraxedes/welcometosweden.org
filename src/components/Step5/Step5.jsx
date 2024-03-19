import "./Step5.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step5 = () => {
    return(
        <div className="step5">

            <div className="step5-wrapper">

                <div className="left">

                    <div className="top-left">
                        <img src={logo} alt="Logo"/>
                        <h2>5</h2>
                    </div>

                    <div className="center-left">
                        <h1>Jobs</h1>
                        <h2>Best ways to find a job</h2>
                        <button>Go to topic</button>
                    </div>


                </div>

                <div className="right">
                    <img src="https://media-private.canva.com/VsIwk/MAEIyOVsIwk/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T235858Z&X-Amz-Expires=62823&X-Amz-Signature=b4aa8b54176b30902c984847dc41da599cee9ecf5ce240834a0c31e14d88296a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2019%20Mar%202024%2017%3A26%3A01%20GMT"/>
                </div>

            </div>
        </div>
    )
}

export default Step5;
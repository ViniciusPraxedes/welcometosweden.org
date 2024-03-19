import "./Step3.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step3 = () => {
    return(
        <div className="step3">

            <div className="step3-wrapper">

                <div className="left">

                    <div className="top-left">
                        <img src={logo} alt="Logo"/>
                        <h2>3</h2>
                    </div>

                    <div className="center-left">
                        <h1>Documents</h1>
                        <h2>How to get an ID card</h2>
                        <button>Go to topic</button>
                    </div>


                </div>

                <div className="right">
                    <img src="https://media-private.canva.com/MADB9WjfJYw/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T161032Z&X-Amz-Expires=85958&X-Amz-Signature=620e922466a14ebfa73a798470f992ae8672b698659b6fece60748e0f091c995&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2019%20Mar%202024%2016%3A03%3A10%20GMT"/>
                </div>

            </div>
        </div>
    )
}

export default Step3;
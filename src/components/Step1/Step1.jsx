import "./Step1.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step1 = () => {
    return(
        <div className="step1">

            <div className="step1-wrapper">

                <div className="left">

                    <div className="top-left">
                        <img src={logo} alt="Logo"/>
                        <h2>1</h2>
                    </div>

                    <div className="center-left">
                        <h1>Move to Sweden</h1>
                        <h2>How to get a residence permit</h2>
                        <button>Go to topic</button>
                    </div>


                </div>

                <div className="right">
                    <img src="https://media-private.canva.com/MADnR3qnBUw/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T003032Z&X-Amz-Expires=72808&X-Amz-Signature=9ac6dc9b519e8a8191fa88f49ff863d524aa93f668270b167f4ab063638405bf&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2018%20Mar%202024%2020%3A44%3A00%20GMT"/>
                </div>

            </div>
        </div>
    )
}

export default Step1;
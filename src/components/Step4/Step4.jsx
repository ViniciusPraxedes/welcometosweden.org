import "./Step4.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step4 = () => {
    return(
        <div className="step4">

            <div className="step4-wrapper">



                <div className="left">
                    <img src="https://media-public.canva.com/AWGso/MAEHsDAWGso/1/s.jpg"/>
                </div>

                <div className="right">

                    <div className="top-right">
                        <img src={logo} alt="Logo"/>
                        <h2>4</h2>
                    </div>

                    <div className="center-right">
                        <h1>Swedish</h1>
                        <h2>Learn the Swedish language</h2>
                        <button>Go to topic</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Step4;
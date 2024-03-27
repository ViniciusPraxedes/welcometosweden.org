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
                    <img src="https://www.bankid.com/assets/bankid/img/app_id-handlingar.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Step3;
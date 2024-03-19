import "./Step6.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step6 = () => {
    return(
        <div className="step6">

            <div className="step6-wrapper">



                <div className="left">
                    <img src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F47ead57e-35e5-11e9-9be1-7dc6e2dfa65e?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"/>
                </div>

                <div className="right">

                    <div className="top-right">
                        <img src={logo} alt="Logo"/>
                        <h2>6</h2>
                    </div>

                    <div className="center-right">
                        <h1>Banking</h1>
                        <h2>How to open a bank account</h2>
                        <button>Go to topic</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Step6;
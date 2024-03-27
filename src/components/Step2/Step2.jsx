import "./Step2.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';



const Step2 = () => {
    return(
        <div className="step2">

            <div className="step2-wrapper">



                <div className="left">
                    <img src="https://www.feline-holidays.com/Media/Feline_Holidays_CO_UK/_Profiles/8ce764d7/97c28908/Holiday%20Home%20Sweden_148-S05120.jpg?v=636869604177484499"/>
                </div>

                <div className="right">

                    <div className="top-right">
                        <img src={logo} alt="Logo"/>
                        <h2>2</h2>
                    </div>

                    <div className="center-right">
                        <h1>Find a home</h1>
                        <h2>Best ways to find a place to live</h2>
                        <button>Go to topic</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Step2;
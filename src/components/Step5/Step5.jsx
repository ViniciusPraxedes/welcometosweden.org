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
                    <img src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/user_picture_800-v9/image_uploads/a1b8aa08-c3fb-4fc0-b1f2-077f0c453464/original.png"/>
                </div>

            </div>
        </div>
    )
}

export default Step5;
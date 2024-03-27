import "./Life.scss";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import logo from './logo-yellow.png';




const Life = () => {
    return(
        <div className="life">

            <div className="life-wrapper">

                <div className="left">

                    <div className="top-left">
                    </div>

                    <div className="center-left">
                        <h1>Life in Stockholm</h1>
                        <h2>This is prime space! Use it to elaborate on your ​attention-grabbing section title. Explain what this ​section is about, share some details, and give just the ​right amount of information to get the audience hooked. ​Don't give everything away, though! After all, you want ​them to click on your call-to-action after reading this.</h2>
                        <button>Go to topic</button>
                    </div>


                </div>

                <div className="right">
                    <img src="https://images.pexels.com/photos/11330281/pexels-photo-11330281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>

            </div>
        </div>
    )
}

export default Life;
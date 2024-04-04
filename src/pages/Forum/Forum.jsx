import { Link } from "react-router-dom";
import "./Forum.scss";
import ForumNavBar from "../../components/ForumNavBar/ForumNavBar";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LanguageIcon from '@mui/icons-material/Language';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
const Forum = () => {
    return (
        <>
            <ForumNavBar/>
            <div className="forum">
                <div className="forum-wrapper">

                    <div className="left">
                        <div className="left-top">
                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><HomeIcon className="icon"/>Home</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><WhatshotIcon className="icon"/>Popular</Link>
                            </div>
                        </div>

                        <div className="left-bottom">
                            <h1>Topics</h1>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><FlightTakeoffIcon className="icon"/>Immigration</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><HomeWorkIcon className="icon"/>Housing</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><AssignmentIndIcon className="icon"/>Visa</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><LanguageIcon className="icon"/>Language</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><WorkIcon className="icon"/>Jobs</Link>
                            </div>

                            <div className="icon-container">
                                <Link className="link" onClick={() => {window.location.href="/topics"}}><AccountBalanceIcon className="icon"/>Banking</Link>
                            </div>
                        </div>

                    </div>

                    <div className="center">
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>




                    <div className="right">


                    </div>


                </div>

            </div>
            <Footer/>
         </>

    );
};

export default Forum;
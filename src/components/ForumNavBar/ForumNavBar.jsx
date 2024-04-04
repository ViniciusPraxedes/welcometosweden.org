import logo from './logo-yellow.png';
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';

import "./ForumNavBar.scss";

const ForumNavBar = () => {
    return(
        <div className="forum-navbar">
            <div className="wrapper">

                <div className="left">
                    <Link className="link" onClick={() => {window.location.href="/"}}><img src={logo} alt="Logo"/></Link>
                </div>

                <div className="center">
                    <div className="search-box">
                        <div className="row">
                            <input type="text" placeholder="Search..."/>
                            <SearchIcon className="searchIcon" />
                        </div>
                    </div>
                </div>

                <div className="right">

                    <div className="icon">
                        <Link className="link" onClick={() => {window.location.href="/topics"}}><AddIcon className="icon"/></Link>
                    </div>

                    <div className="item">

                        <Link className="link"  to="/about">Create post</Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}><NotificationsIcon className="icon"/></Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/login"}}><AccountCircleIcon className="icon"/></Link>
                    </div>

                </div>

            </div>

        </div>
    );

}

export default ForumNavBar;
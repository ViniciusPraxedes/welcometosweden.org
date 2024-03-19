import logo from './logo-yellow.png';
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import "./Navbar.scss";

const Navbar = () => {
    return(
        <div className="navbar">
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
                        <VolunteerActivismIcon className="icon"/>
                    </div>

                    <div className="item">

                        <Link className="link"  to="/about">Donate</Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}>Topics</Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}>About</Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}>Login</Link>
                    </div>

                </div>

            </div>

        </div>
    );

}

export default Navbar;
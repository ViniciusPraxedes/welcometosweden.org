import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "./logo-yellow.png";
import "./ForumNavBar.scss";
import AddPost from "../../pages/AddPost/AddPost";
import {useLogout} from "../../hooks/useLogout";
import {Button, DialogActions, DialogContentText, DialogTitle} from "@mui/material";
import Profile from "../../pages/Profile/Profile";

const ForumNavBar = () => {
    const { user } = useAuthContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenProfile, setIsModalOpenProfile] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const handleMenuOpen = (event) => {
        // Redirect to /login if there is no user in context
        if (!user) {
            setShowLoginDialog(true);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const openModal = () => {
        // Redirect to /login if there is no user in context
        if (!user) {
            setShowLoginDialog(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const openModalProfile = () => {
        // Redirect to /login if there is no user in context
        if (!user) {
            setShowLoginDialog(true);
        } else {
            setIsModalOpenProfile(true);
        }
    };

    const closeModalProfile = () => {
        setIsModalOpenProfile(false);
    };




    const { logout } = useLogout();
    const handleLogout = () => {
        window.location.href = "/";
        logout();

    };

    const closeLoginDialog = () => {
        setShowLoginDialog(false);
    };





    return (
        <div className="forum-navbar">
            <div className="wrapper">
                <div className="left">
                    <Link className="link" onClick={() => { window.location.href = "/" }}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="right">
                    <div className="icon" onClick={openModal}>
                        <AddIcon className="addIcon" />
                    </div>
                    <div className="item" onClick={openModal}>
                        <h1>Create post</h1>
                    </div>
                    <div className="item">
                        <Link className="link" onClick={() => { window.location.href = "/forum" }}>
                            <HomeIcon className="icon" />
                        </Link>
                    </div>
                    <div className="item">
                        <IconButton onClick={handleMenuOpen}>
                            {user && user.profilePic ? (
                                <img src={user.profilePic} alt="Profile" className="profile-pic" />
                            ) : (
                                <AccountCircleIcon className="icon" />
                            )}
                        </IconButton>
                        <Menu
                            id="profile-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <div className="icon" onClick={openModalProfile}>
                                <MenuItem>Profile</MenuItem>
                            </div>
                            <Link onClick={handleLogout}>
                                <MenuItem>Logout</MenuItem>
                            </Link>
                        </Menu>
                    </div>
                </div>
            </div>


            <Dialog open={isModalOpen} onClose={closeModal}>
                {/* Pass closeModal function to AddPost */}
                <AddPost closeModal={closeModal} />
            </Dialog>


            <Dialog open={isModalOpenProfile} onClose={closeModalProfile}>
                {/* Pass closeModal function to AddPost */}
                <Profile closeModal={closeModalProfile} />
            </Dialog>




            <Dialog
                open={showLoginDialog} onClose={closeLoginDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Login to continue"}
                </DialogTitle>
                <DialogContent>
                    <Link to="/login"><Button className="login-button">Login</Button></Link>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>


        </div>
    );
};

export default ForumNavBar;

// ForumNavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Dialog from "@mui/material/Dialog";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "./logo-yellow.png";
import "./ForumNavBar.scss";
import AddPost from "../../pages/AddPost/AddPost";

const ForumNavBar = () => {
    const { user } = useAuthContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                            <Link to="/profile">
                                <MenuItem>Profile</MenuItem>
                            </Link>
                            <Link to="/logout">
                                <MenuItem>Logout</MenuItem>
                            </Link>
                        </Menu>
                    </div>
                </div>
            </div>
            <Dialog
                open={isModalOpen}
                onClose={closeModal}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '100vh' // Adjust width as needed
                    }
                }}
            >
                {/* Pass closeModal function to AddPost */}
                <AddPost closeModal={closeModal} />
            </Dialog>
        </div>
    );
};

export default ForumNavBar;

import React, { useEffect, useState } from "react";
import "./Comments.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddIcon from '@mui/icons-material/Add';
import Comment from "./Comment";
import BASE_URL from "../../config/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {Button, DialogActions, DialogTitle} from "@mui/material";

const Comments = () => {
    const id = useParams().id;
    const [data, setData] = useState([]);
    const [commentText, setCommentText] = useState(""); // State to hold the comment text
    const { user } = useAuthContext();
    const [showLoginDialog, setShowLoginDialog] = useState(false); // State to control dialog visibility

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://forumservice.onrender.com/forum/comment/${id}`
            );
            const reversedData = response.data.reverse();
            setData(reversedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCommentSubmit = async () => {
        try {
            // Check if the user is logged in
            if (!user) {
                // Show login dialog if not logged in
                setShowLoginDialog(true);
                return;
            }

            // Send a POST request to add the comment
            await axios.post(`https://forumservice.onrender.com/forum/comment`, {
                content: commentText,
                username: user.username,
                postId: id,
                profilePic: user.profilePic
            });

            // Refresh comments after adding the new comment
            fetchData();
            // Clear the comment input field
            setCommentText("");
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleCloseLoginDialog = () => {
        setShowLoginDialog(false);
    };

    return (
        <div className="comments">
            <Link to="/forum">
                <ArrowCircleLeftIcon className="icon" />
            </Link>

            <div className="center-comments">
                {data.map((item, index) => (
                    <Comment className="comment" item={item} key={index} />
                ))}
            </div>

            <div className="comment-input">
                <div className="comment-box">
                    <textarea
                        className="text-box"
                        placeholder="Add a comment... (500 characters)"
                        minLength={5}
                        maxLength={500}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}><AddIcon className="cross"/></button>
                </div>
            </div>

            {/* Dialog for login required */}
            <Dialog
                open={showLoginDialog}
                onClose={handleCloseLoginDialog} // Close the dialog when the user clicks outside or presses escape
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
                    {/* Optional: Add actions if needed */}
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default Comments;

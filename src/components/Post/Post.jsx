import React, { useEffect, useState } from "react";
import axios from "axios";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Button, DialogActions, DialogTitle } from "@mui/material";
import "./Post.scss";

const Post = ({ post }) => {


    const { user } = useAuthContext();
    const [count, setCount] = useState(post.likeCount);
    const [liked, setLiked] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);






    const fetchData = async () => {
        try {
            const likeCountResponse = await axios.get(`https://forumservice.onrender.com/forum/post/likeCount/${post.id}`);
            setCount(likeCountResponse.data);

            if (user !== null){
                const response = await axios.get(`https://forumservice.onrender.com/forum/isLiked/${post.id}/${user.id}`);
                const isPostLiked = response.data;

                if (isPostLiked) {
                    setLiked(true);
                }
            }



        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };














    useEffect(() => {
        if (user !== null) {
            fetchData();
        }
    }, [post.id]);











    const toggleLike = async () => {
        try {

            if (!user) {
                setShowLoginDialog(true);
                return;
            }

            if (!liked) {
                await axios.post(`https://forumservice.onrender.com/forum/like/${post.id}/${user.id}`);
                setLiked(true)
                const likeCountResponse = await axios.get(`https://forumservice.onrender.com/forum/post/likeCount/${post.id}`);
                setCount(likeCountResponse.data);

            } else {
                await axios.post(`https://forumservice.onrender.com/forum/unlike/${post.id}/${user.id}`);
                setLiked(false)
                const likeCountResponse = await axios.get(`https://forumservice.onrender.com/forum/post/likeCount/${post.id}`);
                setCount(likeCountResponse.data);
            }

        } catch (error) {
            console.error("Error toggling like:", error);
        }

    };





    const closeLoginDialog = () => {
        setShowLoginDialog(false);
    };













    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={post.profilePicture} alt="Profile"/>
                        <h1>{post.username}</h1>
                        <h2>•</h2>
                        <p>{post.datePosted}</p>
                    </div>
                    <div className="post-top-right">
                        <MoreHorizIcon className="MoreHorizonIcon"/>
                    </div>
                </div>
                <div className="post-center">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
                <div className="post-bottom">
                    <ThumbUpIcon className={`bottom-icon ${liked ? 'liked' : ''}`} onClick={toggleLike} />
                    <p>{count}</p>

                    <Link to={`/comments/${post.id}`}>
                        <ChatBubbleIcon className="bottom-icon"/>
                    </Link>
                    <p>{post.commentCount}</p>

                </div>
            </div>

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

export default Post;

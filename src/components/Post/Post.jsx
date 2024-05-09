import React, { useEffect, useState } from "react";
import axios from "axios";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import "./Post.scss";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";

const Post = ({ item }) => {
    const [count, setCount] = useState(item.likeCount);
    const [liked, setLiked] = useState(false);


    const toggleLike = async () => {
        try {
            if (!liked) {
                await axios.post(`https://forumservice.onrender.com/forum/like/${item.id}`);
                setCount(count + 1);
            } else {
                await axios.post(`https://forumservice.onrender.com/forum/dislike/${item.id}`);
                setCount(count - 1);
            }
            setLiked(!liked);
            // Store liked state in localStorage
            localStorage.setItem(`liked_${item.id}`, !liked);
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    // Check if the post is liked on component mount
    useEffect(() => {
        const isPostLiked = localStorage.getItem(`liked_${item.id}`);
        if (isPostLiked === 'true') {
            setLiked(true);
        }
    }, [item.id]);

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={item.profilePicture} alt="Profile"/>
                        <h1>{item.username}</h1>
                        <h2>•</h2>
                        <p>{item.datePosted}</p>
                    </div>
                    <div className="post-top-right">
                        <MoreHorizIcon className="MoreHorizonIcon"/>
                    </div>
                </div>
                <div className="post-center">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                </div>
                <div className="post-bottom">
                    <ThumbUpIcon className={`bottom-icon ${liked ? 'liked' : ''}`} onClick={toggleLike} />
                    <p>{count}</p>

                    <Link to={`/comments/${item.id}`}>
                        <ChatBubbleIcon className="bottom-icon"/>
                    </Link>
                    <p>{item.commentCount}</p>

                </div>
            </div>
        </div>
    );
};

export default Post;

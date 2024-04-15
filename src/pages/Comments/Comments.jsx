import React, { useEffect, useState } from "react";
import "./Comments.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Post from "../../components/Post/Post";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddIcon from '@mui/icons-material/Add';
import Comment from "./Comment";

const Comments = () => {
    const id = useParams().id;
    const [data, setData] = useState([]);
    const [commentText, setCommentText] = useState(""); // State to hold the comment text

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/forum/comment/${id}`
            );
            setData(response.data);
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCommentSubmit = async () => {
        try {
            // Send a POST request to add the comment
            await axios.post(`http://localhost:8080/forum/comment`, {
                content: commentText,
                username: data[0].username,
                postId: id
            });
            // Refresh comments after adding the new comment
            fetchData();
            // Clear the comment input field
            setCommentText("");
        } catch (error) {
            console.error("Error adding comment:", error);
        }
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
                <textarea className="text-box"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button onClick={handleCommentSubmit}><AddIcon className="cross"/></button>
            </div>


        </div>
    );
};

export default Comments;

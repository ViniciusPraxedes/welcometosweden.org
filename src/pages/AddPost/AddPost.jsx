import "./AddPost.scss";
import React, { useState } from "react";
import axios from "axios";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import BASE_URL from "../../config/config";
import CloseIcon from '@mui/icons-material/Close';

const AddPost = ({ closeModal }) => {
    const { user } = useAuthContext();

    const [formData, setFormData] = useState({
        username: user.username,
        userId: user.id,
        profilePic: user.profilePic,
        title: '',
        content: '',
        topic: ''
    });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const response = await axios.post(`https://forumservice.onrender.com/forum/post`, formData);
            setResponse(response.data);
        } catch (error) {
            console.error('Error occurred:', error);
        }
        setLoading(false); // Stop loading
        window.location.href = '/forum';
    };

    return (
        <div className="AddPost">
            <div className="AddPost-wrapper">
                <div className="close-modal" onClick={closeModal}>
                    <CloseIcon className="icon" />
                </div>
                <h1>Create a post</h1>

                <form className="AddPost-form" onSubmit={handleSubmit}>

                    <div className="AddPost-title">
                        <label>Title</label>
                        <input
                            required
                            minLength={5}
                            maxLength={100}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="AddPost-content">
                        <label>Text</label>
                        <textarea
                            placeholder="Write your ideas here... (500 characters)"
                            required
                            minLength={5}
                            maxLength={500}
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="AddPost-topic">
                        <label>Topic</label>
                        <select
                            required
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                        >
                            <option value="">Select a topic</option>
                            <option value="immigration">Immigration</option>
                            <option value="housing">Housing</option>
                            <option value="visa">Visa</option>
                            <option value="language">Language</option>
                            <option value="jobs">Jobs</option>
                            <option value="banking">Banking</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button className="AddPost-button" type="submit" disabled={loading}>
                        {loading ? <h2>Loading</h2> : <h2>Post</h2>}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default AddPost;

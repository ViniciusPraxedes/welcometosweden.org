import "./AddPost.scss";
import {useState} from "react";
import axios from "axios";

const AddPost = () => {

    const [formData, setFormData] = useState({
        username: 'Vini',
        title: '',
        content: '',
        topic: ''
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://forumservice.onrender.com/forum/post', formData);
            setResponse(response.data);
        } catch (error) {
            console.error('Error occurred:', error);
        }
        window.location.href = '/forum';
    };

    return(
        <div className="AddPost">
            <div className="AddPost-wrapper">
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
                        </select>
                    </div>

                    <button className="AddPost-button" type="submit"><h2>Post</h2></button>

                </form>
            </div>


        </div>
    );

}

export default AddPost;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false); // State for loading indicator

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when registration starts
        try {
            const response = await axios.post("https://forumuserservice.onrender.com/user/register", formData);
            console.log(response.data); // Handle successful response
            // You can redirect the user or show a success message here
            window.location.href = "/success";
        } catch (error) {
            console.error("Error registering user:", error);
            let errorMessage = "";
            if (error.response) {
                console.error("Error message:", error.response.data.message);
                errorMessage = error.response.data.message;
            } else if (error.request) {
                console.error("No response received:", error.request);
                errorMessage = "No response received from the server.";
            } else {
                console.error("Error:", error.message);
                errorMessage = "An error occurred while processing your request.";
            }
            setErrorMessage(errorMessage);
        } finally {
            setLoading(false); // Set loading state to false when registration finishes
        }
    };

    return (
        <>
            <Navbar />
            <div className="register">
                <div className="card">
                    <div className="left">
                        <h1>Members forum</h1>
                        <p>Register and have access to the members forum.</p>
                        <span>Already have an account?</span>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                    <div className="right">
                        {errorMessage && (
                            <div className="errorMessage">
                                <ReportGmailerrorredIcon className="errorIcon"/>
                                <h2>{errorMessage}</h2>
                            </div>
                        )}
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} minLength={4} maxLength={20} required/>
                            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} type="email" required/>
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} minLength={8} maxLength={16} type="password"  required/>
                            <button type="submit" disabled={loading} onClick={loading ? null : handleSubmit}>{loading ? 'Loading...' : 'Register'}</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;

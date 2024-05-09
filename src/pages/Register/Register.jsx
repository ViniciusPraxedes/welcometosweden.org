import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSignUp } from "../../hooks/useSignUp";
import "./Register.scss";

const Register = () => {
    const { signUp, error, isLoading } = useSignUp();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        profilePic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdrIBLRABE_XD2OXWVRvSbnPQXm4uOh5VQTnixToSVDs1ZQ6E837uEkM2IiG9XX6gy3P1NhtjWRIdSPCVFdLaUQMuUvOv6LWYlxRh7mhXCKw4Lw-z6m2dsCw4ZxLuJ2HHmW8sZeeCini4/s1600/Dalarna_paard.png",
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

        await signUp(formData);
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
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} minLength={4} maxLength={20} required />
                            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} minLength={8} maxLength={16} type="password" required />
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Register'}</button>
                        </form>
                        {error && (
                            <div className="errorMessage">
                                <ReportGmailerrorredIcon className="errorIcon" />
                                <h2>{error}</h2>
                            </div>
                        )}
                        <div className="go-to">
                            <span>Already have an account?</span>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";
import "./Login.scss";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const Login = () => {
    const { login, error, isLoading } = useLogin();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    };

    return (
        <>
            <Navbar />
            <div className="login">
                <div className="card">
                    <div className="left">
                        <h1>Forum</h1>
                        <p>
                            Get your questions answered in our member forum.
                        </p>
                        <span>Don't you have an account?</span>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} maxLength={16} required />
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</button>
                        </form>
                        {error && (
                            <div className="errorMessage">
                                <ReportGmailerrorredIcon className="errorIcon" />
                                <h2>{error}</h2>
                            </div>
                        )}
                        <div className="go-to">
                            <span>Don't you have an account?</span>
                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;

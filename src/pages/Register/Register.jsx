import { Link } from "react-router-dom";
import "./Register.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Register = () => {
    return (
        <>
        <Navbar/>
            <div className="register">
                <div className="card">
                    <div className="left">
                        <h1>Members forum</h1>
                        <p>
                            Register and have access to the members forum.
                        </p>
                        <span>Already have an account?</span>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Register</h1>
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>
        </>

    );
};

export default Register;
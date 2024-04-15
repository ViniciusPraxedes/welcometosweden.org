import "./Login.scss";
import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



const Login = () => {
    return (
        <>
            <Navbar/>
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
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                        <div className="go-to">
                            <span>Don't you have an account?</span>
                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
}

export default Login;
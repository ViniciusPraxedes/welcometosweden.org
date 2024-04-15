import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Documents from "./pages/Documents/Documents";
import Taxes from "./pages/Taxes/Taxes";
import Housing from "./pages/Housing/Housing";
import Banking from "./pages/Banking/Banking";
import Jobs from "./pages/Jobs/Jobs";
import Education from "./pages/Education/Education";
import Language from "./pages/Language/Language";






import Topics from "./pages/Topics/Topics";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Forum from "./pages/Forum/Forum";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import Comments from "./pages/Comments/Comments";



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to set login status
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Function to set logout status
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            <Router>
                <Routes>
                    {/*
                    <Route
                        path="/forum"
                        element={isLoggedIn ? <Forum /> : <Login onLogin={handleLogin} />}
                    />
                    */
                    }

                    <Route path="/" element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/topics/documents" element={<Documents />} />
                    <Route path="/comments/:id" element={<Comments />} />
                    <Route path="/topics/taxes" element={<Taxes />} />
                    <Route path="/topics/housing" element={<Housing />} />
                    <Route path="/topics/banking" element={<Banking />} />
                    <Route path="/topics/jobs" element={<Jobs />} />
                    <Route path="/topics/education" element={<Education />} />
                    <Route path="/topics/language" element={<Language />} />
                </Routes>
            </Router>
        </div>
    );
}


export default App;

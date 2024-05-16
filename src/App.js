import './App.css';

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Comments from "./pages/Comments/Comments";
import AddPost from "./pages/AddPost/AddPost";
import Success from "./pages/Success/Success";
import Donate from "./components/Donate/Donate";
import Profile from "./pages/Profile/Profile";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {


    const { user } = useAuthContext();


    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/post" element={<AddPost />} />
                    <Route path="/topics/documents" element={<Documents />} />
                    <Route path="/comments/:id" element={<Comments />} />
                    <Route path="/topics/taxes" element={<Taxes />} />
                    <Route path="/topics/housing" element={<Housing />} />
                    <Route path="/topics/banking" element={<Banking />} />
                    <Route path="/topics/jobs" element={<Jobs />} />
                    <Route path="/topics/education" element={<Education />} />
                    <Route path="/topics/language" element={<Language />} />

                    {/* Protect the profile route */}
                    <Route
                        path="/profile"
                        element={user ? <Profile /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

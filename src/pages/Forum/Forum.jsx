import React, { useState, useEffect } from "react";
import "./Forum.scss";
import ForumNavBar from "../../components/ForumNavBar/ForumNavBar";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import axios from "axios";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LanguageIcon from '@mui/icons-material/Language';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import BASE_URL from "../../config/config";

const Forum = () => {
    const [data, setData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
        fetchData();
    }, [selectedTopic]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const hideDropdown = () => {
        setIsOpen(false);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            let response;
            if (selectedTopic === "popular") {
                response = await axios.get(`${BASE_URL}8070/forum/post/popular`);
            } else {
                response = await axios.get(`${BASE_URL}8070/forum/post/topic/${selectedTopic}`);
            }
            setData(selectedTopic === "popular" ? response.data : response.data.reverse());
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
        hideDropdown();
    };

    return (
        <>
            <ForumNavBar />
            <div className="forum">
                <div className="dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        Topics
                        <KeyboardArrowDownIcon className="arrow" />
                    </button>
                    {isOpen && (
                        <div className="dropdown-content" onMouseDown={(e) => e.stopPropagation()}>
                            <Link onClick={() => handleTopicSelect("popular")}>Popular <WhatshotIcon/></Link>
                            <Link onClick={() => handleTopicSelect("immigration")}>Immigration</Link>
                            <Link onClick={() => handleTopicSelect("housing")}>Housing</Link>
                            <Link onClick={() => handleTopicSelect("visa")}>Visa</Link>
                            <Link onClick={() => handleTopicSelect("language")}>Language</Link>
                            <Link onClick={() => handleTopicSelect("jobs")}>Jobs</Link>
                            <Link onClick={() => handleTopicSelect("banking")}>Banking</Link>
                        </div>
                    )}
                </div>

                <div className="forum-wrapper">
                    <div className="left">
                        <div className="left-top">
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("")}><HomeIcon className="icon" />Home</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("popular")}><WhatshotIcon className="icon" />Popular</span>
                            </div>
                        </div>
                        <div className="left-bottom">
                            <h1>Topics</h1>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("immigration")}><FlightTakeoffIcon className="icon" />Immigration</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("housing")}><HomeWorkIcon className="icon" />Housing</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("visa")}><AssignmentIndIcon className="icon" />Visa</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("language")}><LanguageIcon className="icon" />Language</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("jobs")}><WorkIcon className="icon" />Jobs</span>
                            </div>
                            <div className="icon-container">
                                <span className="link" onClick={() => handleTopicSelect("banking")}><AccountBalanceIcon className="icon" />Banking</span>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="center">
                            <h1>Loading...</h1>
                        </div>
                    ) : error ? (
                        <div className="center">
                            <h1>Error: {error}</h1>
                        </div>
                    ) : (
                        <>
                            <div className="center">
                                <h1 className="selected-topic">{selectedTopic ? selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1) : "All"}</h1>
                                {data.length === 0 ? (
                                    <div className="center">
                                        <h1>No posts available</h1>
                                    </div>
                                ) : (
                                    data.map((item, index) => (
                                        <Post className="post" item={item} key={index} />
                                    ))
                                )}
                            </div>
                        </>
                    )}


                    <div className="right"></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Forum;

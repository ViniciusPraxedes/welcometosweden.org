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
import {Link} from "react-router-dom";

const Forum = () => {
    const [data, setData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const hideDropdown = () => {
        setIsOpen(false);
    };

    const scrollToMiddle = () => {
        window.scrollTo({
            top: window.innerHeight / 5,
            behavior: 'smooth'
        });
    };



    useEffect(() => {
        fetchData(); // Fetch initial data when component mounts
    }, [selectedTopic]); // Re-run effect when selectedTopic changes

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://forumservice.onrender.com/forum/post/topic/${selectedTopic}`);
            const reversedData = response.data.reverse();
            setData(reversedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <>
            <ForumNavBar />
            <div className="forum">

                <div className="dropdown">
                    <button className="dropdown-button" onMouseDown={toggleDropdown}>
                        Topics
                        <KeyboardArrowDownIcon className="arrow" />
                    </button>
                    {isOpen && (
                        <div className="dropdown-content" onMouseDown={(e) => e.stopPropagation()}>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("popular"); }} >Popular <WhatshotIcon/></Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("immigration"); }} >Immigration</Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("housing"); }} >Housing</Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("visa"); }} >Visa</Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("language"); }} >Language</Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("jobs"); }} >Jobs</Link>
                            <Link onClick={() => { hideDropdown(); scrollToMiddle(); handleTopicSelect("banking"); }} >Banking</Link>
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


                    <div className="center">
                        {data.map((item, index) => (
                            <Post className="post" item={item} key={index} />
                        ))}
                    </div>



                    <div className="right">
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Forum;

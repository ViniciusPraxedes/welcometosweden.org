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
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

const Forum = () => {
    const [data, setData] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");

    useEffect(() => {
        fetchData(); // Fetch initial data when component mounts
    }, [selectedTopic]); // Re-run effect when selectedTopic changes

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/forum/post/topic/${selectedTopic}`);
            setData(response.data);
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

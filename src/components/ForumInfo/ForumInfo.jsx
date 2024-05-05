import "./ForumInfo.scss";
import logo from './logo-yellow.png';
import {Link} from "react-router-dom";


const ForumInfo = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="forum-info">

            <div className="forum-info-wrapper">


                <div className="center-top">
                    <h1>Explore our forum and get your questions answered!</h1>
                    <Link to="/forum"> <button onClick={scrollToTop}>Forum</button> </Link>


                </div>

                <div className="center-bottom">

                    <div className="left">
                        <h2>What is like to live in Gothenburg?</h2>
                        <img className="top-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSmO4IRx7tMKd_wHf5OGGp7Vmem37wlBwGilPFuTj1suyyL3gWo7OFCqMqjjGQPVw3yE&usqp=CAU"/>
                    </div>


                    <div className="center">
                        <h2>What is the cost of living in Stockholm?</h2>
                        <img className="middle-image" src="https://d26a57ydsghvgx.cloudfront.net/content/blog/BlogImage_Chat.jpg"/>
                    </div>

                    <div className="right">
                        <h2>What is the average salary in Malmö?</h2>
                        <img className="bottom-image" src="https://images.idgesg.net/images/article/2017/08/group-chat-thinkstock-465520267-100732964-large.jpg?auto=webp&quality=85,70"/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ForumInfo;
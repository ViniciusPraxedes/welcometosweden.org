import "./Post.scss";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Post = () => {
    return (
        <>
            <div className="post">
                <div className="post-wrapper">
                    <div className="post-top">

                        <div className="post-top-left">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzqBOQU8-rmsHcEGZ1imKdw5fefN4G0gkyZdM6ydMNg&s"/>
                            <h1>Username</h1>
                            <h2>•</h2>
                            <p>2012-04-23</p>
                        </div>

                        <div className="post-top-right">
                            <MoreHorizIcon className="MoreHorizonIcon"/>
                        </div>

                    </div>

                    <div className="post-center">
                        <h1>Post name</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="post-bottom">
                        <ThumbUpIcon className="bottom-icon"/>
                        <p>20</p>
                        <ChatBubbleIcon className="bottom-icon"/>
                        <p>2</p>
                    </div>

                </div>

            </div>
        </>

    );
};

export default Post;
import React, {useEffect, useState} from "react";
import "./Comment.scss"
import {Link, useParams} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Comment = ({item}) =>{
    return(

        <div className="comment">
            <div className="comment-wrapper">
                <div className="comment-top">
                    <div className="comment-top-left">
                        <img src={item.profilePicture} alt="Profile"/>
                        <h1>{item.username}</h1>
                        <h2>•</h2>
                        <p>{item.datePosted}</p>
                    </div>
                    <div className="comment-top-right">
                        <MoreHorizIcon className="MoreHorizonIcon"/>
                    </div>
                </div>
                <div className="comment-center">
                    <p className="comment-content">{item.content}</p>
                </div>
            </div>
        </div>

    )
}

export default Comment
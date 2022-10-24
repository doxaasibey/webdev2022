import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";


const PostItem = ({post})=> {
    return (
                <div className="list-group-item">
                    <div className="row">
                        <div className ="col-2">
                             <img alt="" className="float-sm-start rounded-circle" height="50px" src={`../../../images/${post.avatarIcon}`}/>
                        </div>
                        
                        <div className="col-10">
                            <p>
                                <span className="fw-bolder">{post.userName}</span>
                                <i className="fa-solid fa-circle-check"></i>
                                <span className="text-secondary">@{post.handle} {post.time}</span>
                            </p>
                            <p> {post.tuit}</p>
                   
                            <p> 
                                <img alt="" className="rounded border border-secondary rounded" width="500px" src={`../../../images/${post.postImage}`}/>
                            </p>
                            <p className="fw-bolder"> {post.captionTitle}</p>
                            <p className="text-secondary"> {post.caption}</p>
                        </div>

                        <div className="row text-muted mt-3 mb-3">
                            <div className="col"><FontAwesomeIcon icon={faComment} /> {post.numberofComment}</div>
                            <div className="col"><FontAwesomeIcon icon={faRetweet} /> {post.numberofRetuits} </div>
                            <div className="col"><FontAwesomeIcon icon={faHeart} /> {post.numberofLikes} </div>
                            <div className="col"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
                        </div>
                    </div>
                 </div>
    );
};

export default PostItem;
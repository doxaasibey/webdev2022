import React from "react";
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
                        <p>
                                <i className="text-secondary fa-regular fa-comment"></i>
                                <span className="text-secondary">{post.numberofComment}</span>
                            
                                <i className="text-secondary fa-solid fa-retweet"></i>
                                <span className="text-secondary">{post.numberofRetuits}</span>
                            
                                <i className="text-secondary fa-regular fa-heart"></i>
                                <span className="text-secondary"> {post.numberofLikes}</span>
                            
                                <i className="text-secondary fa-solid fa-arrow-up-from-bracket"></i>
                            </p>
                    </div>
                 </div>
    );
};

export default PostItem;
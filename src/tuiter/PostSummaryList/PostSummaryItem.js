import React from "react";
const PostSummaryItem = ({post}) => {
return (
            <li className="list-group-item">
                <div className="row">
                    <div className ="col-8">
                       <div className = "text-secondary">{post.userName} . {post.time} </div>
                        <div className="fw-bolder">{post.topic} </div>
                        <div>{post.title}</div>
                    </div>
                    <div className="col-4">
                        <img width={70} className="float-end rounded-3" src={`../../../images/${post.image}`}/>
                    </div>
                 </div>
            </li>
    );
};

export default PostSummaryItem;
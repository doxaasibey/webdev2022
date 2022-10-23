import PostItem from "./PostItem.js";
import post from "./post.json";
import React from "react";

const PostList = () => {
    return (
                <div>
                   <ul className="list-group">
                        <li className="fw-bolder">
                            {post.map(aPost => <PostItem
                                key={aPost.id}
                                post={aPost}/>
                            )
                            }
                        </li>
                   </ul>
               </div>
    );
};

export default PostList;
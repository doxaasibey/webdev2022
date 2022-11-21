import React from "react";
import PostSummaryItem
    from "./PostSummaryItem";
//import postsArray from './posts.json';
import {useSelector} from "react-redux";


const PostSummaryList = () => {
    const {postsArray} = useSelector(state => state.tuitsData)

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
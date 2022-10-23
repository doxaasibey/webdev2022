import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return (`
                <div>
                   <ul class="list-group">
                   <!-- continue here -->
                        <li class="list-group-item fw-bolder">
                            ${post.map(aPost => PostItem(aPost))}
                        </li>
                   </ul>
               </div>
    `);
}

export default PostList
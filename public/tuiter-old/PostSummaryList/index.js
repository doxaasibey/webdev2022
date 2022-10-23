import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
                <div>
                   <ul class="list-group">
                   <!-- continue here -->
                        <li class="list-group-item fw-bolder">
                            ${post.map(aPost => PostSummaryItem(aPost))}
                        </li>
                   </ul>
               </div>
    `);
}

export default PostSummaryList
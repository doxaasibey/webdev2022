import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
                <div>
                   <ul class="list-group">
                   <!-- continue here -->
                        <li class="list-group-item fw-bolder">
                            Who to follow
                            ${who.map(aWho => WhoToFollowListItem(aWho))}
                        </li>
                   </ul>
               </div>
    `);
}

// $(WhoToFollowList)
export default WhoToFollowList
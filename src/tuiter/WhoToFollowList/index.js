import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (
                   <ul className="list-group">
                        <li className="list-group-item">
                            <h3>Who to follow</h3>
                        </li>
                       {
                           whoArray.map(who =>
                               <WhoToFollowListItem key={who.id} who={who}/>
                           )
                       }
                   </ul>
    );
};

export default WhoToFollowList;
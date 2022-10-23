import React from "react";
const WhoToFollowListItem = ({who}) => {
    return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="float-sm-start rounded-circle" src={`../../../images/${who.avatarIcon}`} height="50px"/>
                    </div>
                    <div className="col-6">
                        <p className="pt-0">{who.handle} <i className="fa-solid fa-circle-check"></i></p>
                        <p className="pt-0">{who.userName}</p>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary w-100 mt-2 rounded-pill"> Follow </button>
                    </div>
                 </div>
             </li>
    );
}


export default WhoToFollowListItem;
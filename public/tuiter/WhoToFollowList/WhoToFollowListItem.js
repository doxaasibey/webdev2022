function WhoToFollowListItem(who) {
    return (`
            <li className="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img class="float-sm-start rounded-circle" src=${who.avatarIcon} height="50px"/>
                    </div>
                    <div class="col-6">
                        <p class="text-white pt-0">${who.handle} <i class="fa-solid fa-circle-check"></i></p>
                        <p class="text-white pt-0"> ${who.userName}</p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary w-100 mt-2 rounded-pill"> Follow </button>
                    </div>
                 </div>
             </li>
    `);
}


export default WhoToFollowListItem;





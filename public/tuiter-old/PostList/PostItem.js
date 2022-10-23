function PostItem(post) {
    return (`
            <li class="list-group">
                <div class="list-group-item bg-black">
                    <div class="row">
                        <div class ="col-2">
                             <img class="float-sm-start rounded-circle" src=${post.avatarIcon} height="50px"/>
                        </div>
                        
                        <div class="col-10">
                            <p>
                                <span class="text-white fw-bolder">${post.userName}</span>
                                <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary">@${post.handle} ${post.time}</span>
                            </p>
                            <p class="text-white"> ${post.tuit}</p>
                   
                            <p> 
                                <img class="rounded border border-secondary rounded" src="${post.postImage}" width="500px"/>
                            </p>
                            <p class="text-white fw-bolder"> ${post.captionTitle}</p>
                            <p class="text-secondary"> ${post.caption}</p>
                        </div>
                        <p>
                                <i class="text-secondary fa-regular fa-comment"></i>
                                <span class="text-secondary">${post.numberofComment}</span>
                            
                                <i class="text-secondary fa-solid fa-retweet"></i>
                                <span class="text-secondary">${post.numberofRetuits}</span>
                            
                                <i class="text-secondary fa-regular fa-heart"></i>
                                <span class="text-secondary"> ${post.numberofLikes}</span>
                            
                                <i class="text-secondary fa-solid fa-arrow-up-from-bracket"></i>
                            </p>
                    </div>
                 </div>
            </li>
    `);
}

export default PostItem;
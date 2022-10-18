function PostSummaryItem(post) {
    return (`
            <li className="list-group-item">
                <div class="row">
                    <div class ="col-8">
                       <p class="text-secondary">${post.topic}</p>
                       <p class="text-white">
                         ${post.userName}
                         <i class="fa-solid fa-circle-check"></i>
                         <span class="text-secondary">${post.time}</span>
                         </p>
                       <p class="text-white">${post.title}</p>  
                    </div>
                    <div class="col-4">
                        <img class="float-end" src="${post.image}" height="100px"/>
                    </div>
                 </div>
            </li>
    `);
}

export default PostSummaryItem;
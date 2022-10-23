const NavigationSidebar = () => {
    return(`
           <div class="list-group">
             <a class="list-group-item" href="/">
               <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action active">
                <i class="fa-solid fa-house"></i> Home</a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-hashtag"></i> Explore</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i> Notifications</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i> Messages</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i> Bookmarks</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-list"></i> Lists</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-user"></i> Profile</a>
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-ellipsis"></i> More</a>
           
           
           </div>
           <div class="d-grid mt-2">
             <a href="#"
                class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
           </div>
 `);
}
export default NavigationSidebar;
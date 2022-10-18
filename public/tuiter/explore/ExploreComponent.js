import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i class="ps-2 fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
                    </div>
                </div>
                
                <div class="col-2">
                    <i class="fa-solid fa-gear position-relative wd-gear-right text-primary"></i>
                </div>          
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">
                        For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">
                        Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">
                        News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">
                        Sports</a>
                </li>
                <li class="nav-item entertainment">
                    <a class="nav-link" href="entertainment.html">
                        Entertainment</a>
                </li>           
           </ul>
            <div class="position-relative">
                <img src="../../images/starship.png" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white">
                    SpaceX's Starship
                </h1>
            </div>           
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;

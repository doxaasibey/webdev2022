import React from "react";
import PostSummaryList from "../PostSummaryList";
import "./index.css";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-10 position-relative">
                        <input placeholder="Search Tuiter" className="ps-5 form-control rounded-pill"/>
                        <i className="bi bi-search position-absolute wd-nudge-up"></i>
                    </div>

                <div className="col-1">
                    <i className="bi bi-gear-fill fs-2 float-end position-relative wd-bottom-4 text-primary"></i>
                </div>
            </div>

           <ul className="nav mb-2 nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">
                        For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">
                        Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">
                        News</a>
                </li>

           </ul>
            <div className="position-relative mb-2">
                <img src="../../images/starship.png" className="w-100"/>
                <h1 className="position-absolute bottom-0 left-0 text-white">
                    SpaceX's Starship
                </h1>
            </div>
            <PostSummaryList/>
            </>
    );
};
export default ExploreComponent;

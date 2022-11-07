import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake, faCalendarDays, faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const bio = useSelector(state => state.profile)

    return(
                <li className="list-group-item">
                    <div className="row">
                        <div className ="position-relative">
                            <img alt={""}  src={`../../../images/${bio.bannerPicture}`} className="w-100 under"/>
                            <img alt="" className="float-sm-start rounded-circle over " height="90px" src={`../../../images/${bio.profilePicture}`}/>
                            <span>
                                <Link to="/tuiter/edit-profile">
                                    <button className="btn btn-light float-end mt-2 rounded-pill"> Edit profile</button>
                                </Link>
                            </span>

                        </div>



                        <div>
                            <p>
                                <span className="fw-bolder">{bio.firstName} {bio.lastName}</span>
                                <span className="text-secondary"> {bio.handle} </span>
                            </p>
                            <div>
                                {bio.bio}
                            </div>

                            <div className="row text-muted mt-3 mb-3">
                                <div className="col"><FontAwesomeIcon icon={faLocationDot} /> {bio.location}</div>
                                <div className="col"><FontAwesomeIcon icon={faBirthdayCake} /> Born {bio.dateOfBirth} </div>
                                <div className="col"><FontAwesomeIcon icon={faCalendarDays} /> Joined {bio.dateJoined} </div>
                            </div>
                            <p>
                                <span className="fw-bolder">{bio.followingCount} </span>
                                <span className="text-secondary">Following </span>
                                <span className="fw-bolder">  {bio.followersCount} </span>
                                <span className="text-secondary">Followers </span>

                            </p>
                        </div>
                    </div>
                </li>
);
};

export default ProfileComponent;


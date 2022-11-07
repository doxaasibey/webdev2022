import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const userData = useSelector(state => state.profile);

    let [userName, setUserName] = useState(userData.firstName + " " + userData.lastName);
    let [userBio, setUserBio] = useState(userData.bio);
    let [userLocation, setUserLocation] = useState(userData.location);
    let [userWebsite, setUserWebsite] = useState(userData.website);
    let [userDOB, setUserDOB] = useState(userData.dateOfBirth);

    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        const editedProfile = {
            "firstName": userName.split(" ")[0],
            "lastName": userName.split(" ")[1],
            "bio": userBio,
            "website": userWebsite,
            "location": userLocation,
            "dateOfBirth": userDOB,
            "handle": userData.handle,
            "profilePicture": userData.profilePicture,
            "bannerPicture": userData.bannerPicture,
            "dateJoined": userData.dateJoined,
            "followingCount": userData.followingCount,
            "followersCount": userData.followersCount
        }
        dispatch(updateProfile(editedProfile));
    }


    return(
        <div className="row">
            <div className="row">
                <span className="col">
                    <Link to="/tuiter/profile" className="bi bi-x-lg col-1" />
                    <h3 className="fw-bolder col-6">Edit Profile</h3>
                </span>
                <button className="float-end btn rounded-pill border mt-2 col-2 bg-dark text-light" onClick={updateProfileClickHandler}>Save</button>
            </div>
            <div className ="position-relative">
                    <img alt={""}  src={`../../../images/${userData.bannerPicture}`} className="w-100 under"/>
                    <img alt="" className="float-sm-start rounded-circle over " height="90px" src={`../../../images/${userData.profilePicture}`}/>
            </div>

            <label>
                Name:
                  <input value={userName} placeholder="Name"
                            className="form-control border-2"
                            type="text"
                            onChange={(event) => setUserName(event.target.value)}>
                  </input>
            </label>

            <label>
                Bio:
                <input value={userBio} placeholder="Bio"
                       className="form-control border-2"
                       type="text"
                       onChange={(event) => setUserBio(event.target.value)}>
                </input>
            </label>

            <label>
                Location:
                <input value={userLocation} placeholder="Location"
                       className="form-control border-2"
                       type="text"
                       onChange={(event) => setUserLocation(event.target.value)}>
                </input>
            </label>

            <label>
                Website:
                <input value={userWebsite} placeholder="Website"
                       className="form-control border-2"
                       type="text"
                       onChange={(event) => setUserWebsite(event.target.value)}>
                </input>
            </label>

            <label>
                Date:
                <input value={userDOB} placeholder="Date Of Birth"
                       className="form-control border-2"
                       type="text"
                       onChange={(event) => setUserDOB(event.target.value)}>
                </input>
            </label>

        </div>
);
}

export default EditProfile;




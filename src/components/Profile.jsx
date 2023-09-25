import React from "react";
import "../styles/Profile.css";
import profileLogo from "../images/person-circle.svg";

const Profile = () => {
  return (
    <div className="profile__place">
      <div className="profile">
        <span>Павлова Татьяна</span>
        <img src={profileLogo} />
      </div>
    </div>
  );
};

export default Profile;

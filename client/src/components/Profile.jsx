import React from "react";
import "../styles/Profile.css";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="profile">
      <span>Павлова Татьяна</span>
      <CgProfile className="icon" />
    </div>
  );
};

export default Profile;

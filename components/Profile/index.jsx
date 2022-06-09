import React from "react";
import "./Profile.css";

function Profile(props) {
  const {email} = props;
  return (
    <div className="profile-1">
      <div className="overlap-group-12">
        <div className="franklin-jr avenir-black-eerie-black-16px">{email}</div>
        <div className="super-admin-2 avenir-book-normal-stack-14px">Stylist</div>
      </div>
      <img className="arrow-6" src="/img/arrow-1@1x.png" />
    </div>
  );
}

export default Profile;

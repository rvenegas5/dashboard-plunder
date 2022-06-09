import React from "react";
import "./Group82.css";

function Group82(props) {
  const { iconUser } = props;

  return (
    <div className="group-82">
      <img className="icon-user" src={iconUser} />
      <div className="projects-1 avenir-medium-black-18px">My Account</div>
    </div>
  );
}

export default Group82;

import React from "react";
import "./index.scss";
import Dashboard from "../../images/Dashboard.svg";

const SubMenuButton = ({ name }) => {
  return (
    <div className="nav-button">
      <img height="15px" width="15px" src={Dashboard} alt="o" />
      <span className="">{name}</span>
    </div>
  );
};

export default SubMenuButton;

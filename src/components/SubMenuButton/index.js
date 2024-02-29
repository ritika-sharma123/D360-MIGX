import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Dashboard from "../../images/Dashboard.svg";

const SubMenuButton = ({ name, path }) => {
  console.log("path", path);
  return (
    <Link to={`/${path}`} className="link">
      <div className="nav-button">
        <img height="15px" width="15px" src={Dashboard} alt="o" />
        <span className="">{name}</span>
      </div>
    </Link>
  );
};

export default SubMenuButton;

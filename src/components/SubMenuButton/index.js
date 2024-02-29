import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const SubMenuButton = ({ name, onClick, path }) => {
  console.log("path", path);
  return (
    <Link to={`/${path}`}>
      <div className="nav-button">
        <button className="button" onClick={onClick}>
          {name}
        </button>
      </div>
    </Link>
  );
};

export default SubMenuButton;

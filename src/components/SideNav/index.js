import React from "react";
import "./index.scss";
import SubMenuButton from "../SubMenuButton";
import { Link, useNavigate } from "react-router-dom";

const Data = [
  {
    name: "Projects",
    image: "",
    path: "projects",
  },
  {
    name: "Sources",
    image: "",
    path: "sources",
  },
  {
    name: "Targets",
    image: "",
    path: "targets",
  },
  {
    name: "Reports & Dashboards",
    image: "",
    path: "",
  },
  {
    name: "Administration",
    image: "",
    path: "",
  },
  {
    name: "Help",
    image: "",
    path: "",
  },
  {
    name: "Logout",
    image: "",
    path: "",
  },
];

const SideNav = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="side-nav">
        {Data.map((i) => {
          return (
            <div className="nav-button-container">
              <SubMenuButton
                name={i.name}
                image={i.image}
                path={i.path}
                onClick={() => handleClick(i.path)}
              >
                {i}
              </SubMenuButton>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;

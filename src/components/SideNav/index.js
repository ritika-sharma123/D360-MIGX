import React from "react";
import "./index.scss";
import SubMenuButton from "../SubMenuButton";
import { Link } from "react-router-dom";
import Dashboard from "../../images/Dashboard.svg";

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
];

const SideNav = () => {
  return (
    <>
      <div className="side-nav">
        {Data.map((i, index) => {
          return (
            <Link to={`/${i.path}`} className="link nav-button-container">
              <div className="nav-button-div">
                <SubMenuButton
                  key={index}
                  name={i.name}
                  image={i.image}
                  path={i.path}
                ></SubMenuButton>
              </div>
            </Link>
          );
        })}
        <Link className="logout-link nav-button-container" to="/logout">
          <div className="logout-div">
            <img height="15px" width="15px" src={Dashboard} alt="o" />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideNav;

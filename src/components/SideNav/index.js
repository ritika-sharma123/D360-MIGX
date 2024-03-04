import React from "react";
import "./index.scss";
import SubMenuButton from "../SubMenuButton";
import { Link } from "react-router-dom";
import Dashboard from "../../assets/images/Dashboard.svg";
import Logout from "../../assets/images/Logout.svg";
import Bar from "../../assets/images/Bars.svg";
import Control from "../../assets/images/Control.svg";
import Database from "../../assets/images/Database.svg";
import Question from "../../assets/images/Question.svg";
import User from "../../assets/images/User.svg";
const Data = [
  {
    name: "Projects",
    image: Dashboard,
    path: "projects",
  },
  {
    name: "Sources",
    image: Database,
    path: "sources",
  },
  {
    name: "Targets",
    image: User,
    path: "targets",
  },
  {
    name: "Reports & Dashboards",
    image: Control,
    path: "",
  },
  {
    name: "Administration",
    image: Bar,
    path: "",
  },
  {
    name: "Help",
    image: Question,
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
            <img height="15px" width="15px" src={Logout} alt="o" />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideNav;

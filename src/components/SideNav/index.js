import React from "react";
import "./index.scss";
import SubMenuButton from "../SubMenuButton";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../../assets/images/Dashboard.svg";
import {
  DashboardOutlined,
  DatabaseOutlined,
  BranchesOutlined,
  FileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const Data = [
  {
    name: "Projects",
    image: DashboardOutlined,
    path: "projects",
  },
  {
    name: "Sources",
    image: DatabaseOutlined,
    path: "sources",
  },
  {
    name: "Targets",
    image: BranchesOutlined,
    path: "targets",
  },
  {
    name: "Reports & Dashboards",
    image: "",
    path: FileOutlined,
  },
  {
    name: "Administration",
    image: LogoutOutlined,
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
            <NavLink to={`/${i.path}`} className="link nav-button-container">
              <div className="nav-button-div">
                <SubMenuButton
                  key={index}
                  name={i.name}
                  image={i.image}
                  path={i.path}
                ></SubMenuButton>
              </div>
            </NavLink>
          );
        })}
        <NavLink className="logout-link nav-button-container" to="/logout">
          <div className="logout-div">
            <img height="15px" width="15px" src={Dashboard} alt="o" />
            <span>Logout</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SideNav;

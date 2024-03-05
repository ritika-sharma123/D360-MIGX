import React from "react";
import Header from "../Headers";
import "./index.scss";
import SideNav from "../SideNav";
import Content from "../Content";
import Projects from "../../pages/Project/AllProjects";
import { Route, Router, Routes } from "react-router-dom";
import Sources from "../../pages/Sources";
import CreateProject from "./../../pages/Project/CreateProjects";
import Project from "../../pages/Project/AllProjects/index";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="nav-content">
        <SideNav />
        <div
          style={{
            width: 2,
            backgroundColor: "#e5e5e56e",
          }}
        ></div>
        <Content>
          <Routes>
            <Route path="/projects" element={<Project />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </Content>
      </div>
    </>
  );
};

export default Layout;

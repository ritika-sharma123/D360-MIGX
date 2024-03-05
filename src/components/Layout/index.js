import React from "react";
import Header from "../Headers";
import "./index.scss";
import SideNav from "../SideNav";
import Content from "../Content";
import Projects from "../../pages/AfterLogin/Projects";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Sources from "../../pages/AfterLogin/Sources";
import CreateProject from "./../../pages/AfterLogin/CreateProject";
import { Login } from "../../pages/BeforeLogin";
import Target from "../../pages/AfterLogin/Target/Target";

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
            <Route path="/" element={<Navigate replace to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/targets" element={<Target />} />
          </Routes>
        </Content>
      </div>
    </>
  );
};

export default Layout;

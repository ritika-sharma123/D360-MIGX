import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/Login";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
//import Layout from "./components/Layout";
//import ManageIntegrationInitiate from "./pages/ManageIntegrations/ManageIntegrationInitiate";
//import { useDispatch } from "react-redux";
import axios from "axios";


const Container = styled.div``;
const App = () => {
 // const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handelLogin = async (username, password) => {
    if (username === "admin" && password === "password") {
      axios.get("/login").then((response) => {
        if (response) {
          console.log(response)
          if (response.status === "Succesfully Logged in") {
            setIsLoggedIn(true);
          }
          
        }
      })
      .catch((reason) => {
       console.log(reason)
      });
      setIsLoggedIn(true);
      
    }
  };

  return (
    <div>
      {isLoggedIn? <Layout />
      : <LoginPage onLogin={handelLogin} />}
      
    </div>
  );
};

export default App;

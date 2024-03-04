import React, { useEffect, useState } from "react";
import "./App.scss";
import Layout from "./components/Layout";

import axios from "axios";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { routes } from './routes'
import Storage from './services/Storage';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader, setBaseURL } from "./lib/constant";
import { env } from './env';
import { Login } from "./pages/BeforeLogin";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const creatUserSession = async data => {
    await Storage.setItem("user", data);
    setUser(data);
  }

  return (
    <div className="container">
    <div className="App">
      {/* <Router basename={'/development'}> */}
      {/* <Router basename={'/qa'}> */}
      {/* <BrowserRouter basename={'/'}> */}
      <Routes>
      {routes.map((route, index) => (
              <Route path="/" element={<route.component/>} />
              ))}
            </Routes>
      {/* </BrowserRouter> */}
    </div>
    </div>
  );
}

export default App;

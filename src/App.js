import React, { useEffect, useState } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import LoginPage from "./pages/Login";
import axios from "axios";
function App() {
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
    <div className="container">
      {isLoggedIn? <Layout />
      : <LoginPage onLogin={handelLogin} />}
    </div>
  );
}

export default App;

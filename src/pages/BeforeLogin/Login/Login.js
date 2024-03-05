import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import "./index.css";
//import EyeInvisible from "../../images/EyeInvisible.png";
//import VisibilityIcon from "@mui/icons-material/Visibility";
import Logo from "../../../assets/images/Logo.png";
import { useForm } from "react-hook-form";
import Label from "../../../components/Label";
import LoginButton from "../../../components/LoginButton";
import { loginAsync } from "../../../lib";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useLocation } from "react-router";
import Storage from "../../../services/Storage";

const LoginCardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  position: relative;
  font-family: var(--font-family);
`;

const LoginCard = styled.div`
  width: 460px;
  padding: 15px 30px 15px 30px;
  background-color: #082340;
  color: #ffffff;
  border-radius: 8px;

  ForgotPasswordText {
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    margin: 0px;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 15px;
  }
`;

const ForgotPasswordText = styled.div`
  text-align: center;

  span {
    color: #ff7a45;
    border-bottom: 1px solid #ff7a45;
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh-100px);

  img {
    width: 480px;
    height: 90px;
  }
`;

const Login = ({ onLogin }) => {
  const [creds, setCreds] = useState({
    userName: "",
    passWord: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let dispatch = useDispatch();
  const loginResponse = useSelector((state) => state.login.loginResponse);
  const navigate = useNavigate();
  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInput = (e, key) => {
    setCreds({
      ...creds,
      [key]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Perform authentication logic here
    if (creds.userName === "admin" && creds.passWord === "password") {
      console.log(creds)
      setIsLoggedIn(true);
      onLogin(creds.userName, creds.passWord);
    }
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    let postData = JSON.stringify({
      username: data.username,
      password: data.password,

    });
    console.log(postData)
    //navigate("/Layout")
    window.location.reload();
    Storage.setItem("user", postData);
    if (postData.username === "admin" && postData.password === "123456") {
      Storage.setItem("user", postData);
      dispatch(loginAsync(postData));
      //  window.location.reload();
    }

  }
  return (
    <div>
      <HeaderContainer>
        <img src={Logo} alt="Logo"></img>
      </HeaderContainer>
      <LoginCardDiv>
        <LoginCard>
          <h3 className="login-card">Log In</h3>
          <div>
            <p>Please Select Your Role</p>
            <div>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="end"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label="Administrator"
                />

                <FormControlLabel
                  value="end1"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label="Employee"
                />
              </RadioGroup>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              labelText="Username"
              value={creds.userName}
              onChange={(e) => handleInput(e, "username")}
              reference={register("username", {
                required: "Username field is required.",
                name: "username",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })}
            />
            {errors.username && <div className={"errorMsg"}>{errors.username.message}</div>}
            <Input
              type="password"
              labelText="Password"
              value={creds.passWord}
              reference={register("password", {
                required: "Password field is required.",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })}

              onChange={(e) => handleInput(e, "passWord")}
              suffix={
                isPasswordVisible ? (
                  <span>
                    {/* <img src={VisibilityIcon} alt="v" onClick={showPassword} /> */}
                  </span>
                ) : (
                  <span>
                    {/* <img src={EyeInvisible} alt="" onClick={showPassword} /> */}
                  </span>
                )
              }
            />
            {errors.password && <div className={"errorMsg"}>{errors.password.message}</div>}
            <LoginButton name="Continue" color="#ffff" backgroundColor="#ff7a45" />
          </form>
          <ForgotPasswordText>
            <span>Forgot Password</span>
          </ForgotPasswordText>
          <ForgotPasswordText>
            <p>
              Do you have an account? <span>Sign Up Here.</span>
            </p>
          </ForgotPasswordText>
        </LoginCard>
      </LoginCardDiv>
    </div>
  );
};

export default Login;

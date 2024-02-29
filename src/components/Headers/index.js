import React from "react";
import styled from "styled-components";
import "./index.scss";
import MigxLogo from "../../images/MigXpressDevelopmentPortal.png";
import Avatar from "../../images/Avatar (1).png";
import Icon1 from "../../images/Icon-Wrapper (1).png";
import Icon2 from "../../images/Icon-Wrapper.png";

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="header">
        <div>
          <img src={MigxLogo} alt="logo" />
        </div>
        <div className="user-profile-div">
          <img src={Icon1} alt="logo" />
          <img src={Icon2} alt="logo" />
          <div className="user-profile-div">
            <img src={Avatar} alt="logo" />
            <span>Deepti Tiwari</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

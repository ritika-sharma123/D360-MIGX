import React from "react";
import "./index.scss";
import MigxLogo from "../../assets/images/MigXpressDevelopmentPortal.png";
import Avatar from "../../assets/images/Avatar.png";
import Icon1 from "../../assets/images/Icon-Wrapper.png";
import Icon2 from "../../assets/images/Icon-Wrapper1.png";

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="header">
        <div>
          <img src={MigxLogo} height="18px" alt="logo" />
        </div>
        <div className="user-profile-div">
          <img src={Icon2} alt="logo" />
          <img src={Icon1} alt="logo" />
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

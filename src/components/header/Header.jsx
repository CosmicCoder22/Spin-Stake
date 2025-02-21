import React from "react";
import "./header.css";

import logo from "../../assets/logo.gif";

function Header() {
  return (
    <div className="headerBody">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="headerContainer">
        <div className="logoContainer">
          <button className="buyBtn">Spin Stake</button>
        </div>
        <div className="navContainer">
          <button className="navBtn">ABOUT US</button>
          <button className="navBtn">SOCIALS</button>
          <button className="navBtn">TOKENOMICS</button>
          <button className="buyBtn main">BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

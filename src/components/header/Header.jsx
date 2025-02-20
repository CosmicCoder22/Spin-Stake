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
          <h1>Spin Stake</h1>
        </div>
        <div className="navContainer">
          <button className="navBtn">about us</button>
          <button className="navBtn">Socials</button>
          <button className="navBtn">Tokenomics</button>
          <button className="buyBtn">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

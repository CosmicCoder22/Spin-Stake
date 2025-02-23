import React from "react";
import "./header.css";
import './headerMediaQuery.css'

import logo from "../../assets/logo.gif";

function Header({ handleTokenSaleBlinking, handleSpinBlinking, handleTokenomicsBlinking, handleSocialsBlinking}) {
  return (
    <div className="headerBody">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="headerContainer">
        <div className="logoContainer">
          <h1 className="logoBaner">Spin Stake</h1>
        </div>
        <div className="navContainer">
          <button className="navBtn" onClick={handleSpinBlinking}>SPIN</button>
          <button className="navBtn" onClick={handleSocialsBlinking}>SOCIALS</button>
          <button className="navBtn" onClick={handleTokenomicsBlinking}>TOKENOMICS</button>
          <button className="buyBtn main" onClick={handleTokenSaleBlinking}>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

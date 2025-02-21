import React from "react";
import "./tokenomics.css";

import greenProgresBar30 from "../../assets/30greenProgresBar.png";
import greenProgresBar20 from "../../assets/20greenProgresBar.png";
import greenProgresBar10 from "../../assets/10greenProgresBar.png";

function Tokenomics({ isTokenomicsBlinking }) {
  return (
    <div className={`tokenomicsBody ${isTokenomicsBlinking ? 'blinking' : ''}`}>
      <div className="containerName">
        <h1>TOKENOMICS</h1>
      </div>
      <div className="allocationContainer">
        <div className="allocationProgresbarContainer">
          <div className="allocationSectionContainer">
            <span className="allocationName">Public Sale</span>
            <div className="progresBar">
              <img src={greenProgresBar30} alt="" />
            </div>
            <p>30 000 000 / 100 000 000</p>
          </div>
          <div className="allocationSectionContainer">
            <span className="allocationName">Pre-sale</span>
            <div className="progresBar">
              <img src={greenProgresBar20} alt="" />
            </div>
            <p>20 000 000 / 100 000 000</p>
          </div>
          <div className="allocationSectionContainer">
            <span className="allocationName">Team</span>
            <div className="progresBar">
              <img src={greenProgresBar10} alt="" />
            </div>
            <p>10 000 000 / 100 000 000</p>
          </div>
          <div className="allocationSectionContainer">
            <span className="allocationName">Lucky wheel</span>
            <div className="progresBar">
              <img src={greenProgresBar20} alt="" />
            </div>
            <p>20 000 000 / 100 000 000</p>
          </div>
        </div>
      </div>
      <div className="contractAddress">
        <span>Contract address</span>
        <p>0x4C57b8f7744BC6A10b14E0ADEE5920104EEF8fcf</p>
      </div>
      <div className="marketPlaceAddress">
        <span>Marketplace address</span>
        <p href="https://sepolia.etherscan.io/address/0x0534a01bd3c598F518735317D72f6109A424D31F">0x4C57b8f7744BC6A10b14E0ADEE5920104EEF8fcf</p>
      </div>
      <button className="navBtn">Learn more</button>
    </div>
  );
}

export default Tokenomics;

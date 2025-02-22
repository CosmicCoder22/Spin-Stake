import React, { useState } from 'react'
import './userInfo.css'

function UserInfo() {

  const [text, setText] = useState("Connect wallet")

  const handleConnectBtnClick = () => {
    setText((prev) => (prev === "Connect wallet" ? "0x4C5....F8fcf" : "Connect wallet"))
  }
  return (
    <div className='userInfoBody'>
      <div className="userInfoContent">
        <div className="containerName">
          <h1>User Info</h1>
        </div>
        <div className="connectBtn">
          <button className='buyBtn' onClick={handleConnectBtnClick}>{text}</button>
        </div>
        <div className="userStatistic">
          <div className="tokenOwned">
            <p>Token owned:</p>
            <p>100 000 000</p>
          </div>
          <div className="totalSupply">
            <p>Total supply:</p>
            <p>100 000 000</p>
          </div>
          <div className="tokenLeft">
            <p>Tokens left:</p>
            <p>100 000 000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
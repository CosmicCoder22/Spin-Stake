import React from 'react'
import './userInfo.css'

function UserInfo() {
  return (
    <div className='userInfoBody'>
      <div className="userInfoContent">
        <div className="containerName">
          <h1>User Info</h1>
        </div>
        <div className="connectBtn">
          <button className='buyBtn'>Connect wallet</button>
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
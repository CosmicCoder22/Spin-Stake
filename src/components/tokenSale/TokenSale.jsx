import React from 'react'
import './tokenSale.css'

function TokenSale() {
  return (
    <div className='tokeSaleBody'>
        <div className="tokeSaleContent">
            <div className="containerName">
                <h1>Token Sale</h1>
            </div>
            <div className="liveContainer">
                <div className="redCircle"></div>
                <p>Is LIVE</p>
                <div className="liveTimer"> 12:12:12:12</div>
            </div>
            <div className="stageContainer">
                <p>Project stage</p>
            </div>
            <div className="buyNowBtn">
                <button className='buyBtn'>BUY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default TokenSale
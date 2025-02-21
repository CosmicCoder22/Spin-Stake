import React, { useState } from 'react'
import './aboutUs.css'

function AboutUs() {

  const [isAboutUsBlinking, setIsAboutUsBlinking] = useState(false)

  const handleAboutUsBlinking = () => {
    setIsAboutUsBlinking(true)
    setTimeout(() => {
      setIsAboutUsBlinking(false)
    }, 2000)
  }
  return (
    <div className='aboutUsBody'>
          <p>
            SpinStake is a blockchain company offering a secure, innovative
            token for staking and trading. We empower users with seamless access
            to decentralized finance, combining transparency, efficiency, and
            value.
          </p>
        </div>
  )
}

export default AboutUs
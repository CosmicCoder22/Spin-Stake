import React, { useState } from 'react';
import './spinContainer.css';

import wheelFront from '../../assets/wheelFront.png';
import wheelBack from '../../assets/wheelBack.png';

function SpinContainer({ isSpinBlinking }) {
  const sectors = [3000, 100, 7000, 500, 5000, "Re Roll", 10000, 0];
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const sectorIndex = Math.floor(Math.random() * sectors.length);
    const winningSectorAngle = sectorIndex * 45;
    const offset = 270;
    const totalRotation = 10 * 360 + offset - winningSectorAngle;

    setRotation(rotation + totalRotation);

    setTimeout(() => {
      alert(`Winnig sector: ${sectors[sectorIndex]}`);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className={`spinContainerBody ${isSpinBlinking ? 'blinking' : ''}`}>
      <div className="spinBtnContainer">
        <div className="containerName">
          <h1>Spin to Win</h1>
        </div>
        <div className="spinBtn">
          <button className='buyBtn' onClick={spinWheel} disabled={isSpinning}>Spin</button>
        </div>
        <div className="spinTimer">08:00:00</div>
      </div>
      <div className="wheelContainer">
        <img 
          src={wheelFront} 
          alt="wheel"
          className='wheelFront'
        />
        <img src={wheelBack}
          alt="wheel" className={`wheelBack ${isSpinning ? "spinning" : ""}`} 
          style={{ transform: `rotate(${rotation}deg)` }} 
          />
      </div>
    </div>
  );
}

export default SpinContainer;

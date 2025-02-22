import React, { useState, useEffect } from 'react';
import './spinContainer.css';

import wheelFront from '../../assets/wheelFront.png';
import wheelBack from '../../assets/wheelBack.png';

function SpinContainer({ isSpinBlinking }) {
  const sectors = [3000, 100, 7000, 500, 5000, "Re Roll", 10000, 0];
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [spinTimer, setSpinTimer] = useState(28800); // Початковий час: 8 годин (28800 секунд)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Функція для конвертації секунд в годинник, хвилини та секунди
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    let timer;
    if (isSpinning && spinTimer > 0) {
      // Запускаємо таймер, поки обертання триває
      timer = setInterval(() => {
        setSpinTimer((prev) => prev - 1);
      }, 1000);
    } else if (spinTimer === 0) {
      clearInterval(timer);
      setIsSpinning(false);  // Закриваємо обертання
    }
    return () => clearInterval(timer);  // Очистити таймер, коли компонент розмонтується або зміниться статус
  }, [isSpinning, spinTimer]);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setIsButtonDisabled(true);  // Блокуємо кнопку

    const sectorIndex = Math.floor(Math.random() * sectors.length);
    setSelectedSector(sectorIndex);

    const winningSectorAngle = sectorIndex * 45;
    const offset = 270;
    const totalRotation = 10 * 360 + offset - winningSectorAngle;

    setRotation(rotation + totalRotation);

    setTimeout(() => {
      setModal(true);
      setIsButtonDisabled(false);  // Відкриваємо кнопку після завершення обертання
    }, 4000);
  };

  return (
    <div className={`spinContainerBody ${isSpinBlinking ? 'blinking' : ''}`}>
      {modal && (
        <div className="modalBody" onClick={() => setModal(false)}>
          <div className="modalContent">
            <div className="modalSection">
              <h1>Spin Stake</h1>
              {selectedSector !== null && `You won ${sectors[selectedSector]} tokens`}
            </div>
            <button className="buyBtn">Claim !</button>
          </div>
        </div>
      )}
      <div className="spinBtnContainer">
        <div className="containerName">
          <h1>Spin to Win</h1>
        </div>
        <div className="spinBtn">
          <button className="buyBtn" onClick={spinWheel} disabled={isButtonDisabled}>
            Spin
          </button>
        </div>
        <div className="spinTimer">
          {isSpinning ? formatTime(spinTimer) : '08:00:00'}
        </div>
      </div>
      <div className="wheelContainer">
        <img
          src={wheelFront}
          alt="wheel"
          className="wheelFront"
        />
        <img
          src={wheelBack}
          alt="wheel"
          className={`wheelBack ${isSpinning ? 'spinning' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}

export default SpinContainer;

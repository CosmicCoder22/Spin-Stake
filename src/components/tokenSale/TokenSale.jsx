import React, { useState, useEffect } from "react";
import "./tokenSale.css";

function TokenSale({ isTokenSaleBlinking }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                            else {
                                clearInterval(timer); // Зупиняємо таймер, якщо дні = 0
                                return prevTime;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTimer = (number) => (number < 10 ? `0${number}` : number);

    return (
        <div className={`tokenSaleBody ${isTokenSaleBlinking ? "blinking" : ""}`}>
            <div className="tokenSaleContent">
                <div className="containerName">
                    <h1>Token Sale</h1>
                </div>
                <div className="liveContainer">
                    <div className="redCircle"></div>
                    <p>Is LIVE</p>
                    <div className="liveTimer">
                        {formatTimer(timeLeft.days)}:{formatTimer(timeLeft.hours)}:
                        {formatTimer(timeLeft.minutes)}:{formatTimer(timeLeft.seconds)}
                    </div>
                </div>
                <div className="stageContainer">
                    <p>Project stage</p>
                </div>
                <div className="buyNowBtn">
                    <button className="buyBtn main">BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default TokenSale;

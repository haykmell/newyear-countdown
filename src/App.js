import React, { useEffect, useState } from "react";
import ParticlesSet from './Particles';
import CountDown from './CountDown';
import SoundPlayer from './SoundPlayer';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-1-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      timerComponents.push(
        <div key={index}>
          00 <span>{interval}</span>
        </div>
      );
      return;
    }
    //asd
    timerComponents.push(
      <div key={index}>
        {timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]} <span>{interval}</span>
      </div>
    );
  });

  return (
    <main>
      <CountDown timerComponents={timerComponents} />
      <ParticlesSet />
      <SoundPlayer />
    </main >
  );
}

export default App;

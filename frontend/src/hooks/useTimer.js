import { useEffect, useState } from "react";

export default function useTimer(start = false) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(start);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  return {
    seconds,
    startTimer,
    stopTimer,
    resetTimer,
  };
}
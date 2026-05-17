import { useState, useRef, useEffect } from "react";

const useCountdownTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const intervalRef = useRef<number | null>(null);

  const startCountdown = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  };

  const resetCountdown = () => {
    // 清除之前定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(initialTime);
  };

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;

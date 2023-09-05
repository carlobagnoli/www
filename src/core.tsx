import { useEffect, useState } from "react";

export const useCounter = (delay: number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setCounter((v) => v + 1);
    }, delay);
    return () => {
      clearInterval(counter);
    };
  });

  return counter;
};

export const useTimer = (delay: number) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDone(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return done;
};

import { useRef, useState } from "react";

export default function Timer() {
  const [start, setStart] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const timer = useRef<number | undefined>(undefined);

  function handleClickStart() {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleClickStop() {
    if (timer.current !== undefined) {
      clearInterval(timer.current);
    }
  }
  return (
    <>
      <h1>Timer : {now !== null && start !== null ? now - start : 0} ms</h1>
      <button onClick={handleClickStart}>Start</button>
      <button onClick={handleClickStop}>Stop</button>
    </>
  );
}

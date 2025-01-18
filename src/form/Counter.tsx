import { useState } from "react";

export default function Counter() {
  const [Counter, setCounter] = useState(0);

  function incrementClick() {
    setCounter(Counter + 1);
  }

  function decrementClick() {
    setCounter(Counter - 1);
  }

  return (
    <>
      <button onClick={incrementClick}>Tambah</button>
      <button onClick={decrementClick}>Kurang</button>
      <h1>Counter = {Counter}</h1>
    </>
  );
}

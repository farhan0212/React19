import { useState } from "react";

export default function Counter({ name }: { name: string }) {
  const [count, setCount] = useState<number>(0);

  function handleClickIncrement() {
    setCount(count + 1);
  }

  function handleClickDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>
        Counter {name} : {count}
      </h1>
      <button onClick={handleClickIncrement}>tambah</button>
      <button onClick={handleClickDecrement}>kurang</button>
    </>
  );
}

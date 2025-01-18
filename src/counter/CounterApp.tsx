import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show, setShow] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShow(e.target.checked);
  }

  return (
    <>
      {show ? (
        <div>
          <Counter key="1" name="farhan" />
        </div>
      ) : (
        <section>
          <Counter key="1" name="ramadan" />
        </section>
      )}
      <input type="checkbox" checked={show} onChange={handleChange} />
    </>
  );
}

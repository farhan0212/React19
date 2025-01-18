import { useRef } from "react";

interface props {
  text: string;
  message: string;
}

export default function AlertButton({ text, message }: props) {
  const counter = useRef(0);

  const handleClick = () => {
    alert(`${message} ${counter.current++}`);
  };

  return (
    <>
      <button onClick={() => handleClick()}>{text}</button>
    </>
  );
}

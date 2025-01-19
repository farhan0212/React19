import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const nameInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setName("");
    setMessage("");

    if (nameInput.current) {
      nameInput.current.focus();
    }
    alert(`Name : ${name}, Message : ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <GuestBookForm ref={nameInput} name={name} setName={setName} />
      <br />
      <label htmlFor="message">Input Message disini</label>
      <br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />{" "}
      <br />
      <button type="submit" onClick={handleSubmit}>
        submit button
      </button>
    </>
  );
}

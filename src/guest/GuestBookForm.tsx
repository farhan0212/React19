import { RefObject } from "react";

interface GuestBookFormType {
  ref: RefObject<HTMLInputElement | null>;
  name: string;
  setName: (value: string) => void;
}

export default function GuestBookForm({
  ref,
  name,
  setName,
}: GuestBookFormType) {
  return (
    <>
      <label htmlFor="name">Input Nama disini</label>
      <br />
      <input
        type="text"
        name="name"
        ref={ref}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
    </>
  );
}

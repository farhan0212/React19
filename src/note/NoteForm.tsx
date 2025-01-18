import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const dispatch = useContext(NotesDispatchContext);

  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    if (dispatch) {
      dispatch({
        type: "ADD_NOTE",
        text: text,
      });
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="input disini kawan"
        value={text}
        onChange={handleChange}
      />{" "}
      <button onClick={handleClick}> add note kawan</button>
    </>
  );
}

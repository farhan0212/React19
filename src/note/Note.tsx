import React, { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";
import { NoteType } from "./NoteApp";

interface NoteProps {
  note: NoteType;
}

export default function Note({ note }: NoteProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const dispatch = useContext(NotesDispatchContext);

  let component;

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    if (dispatch) {
      dispatch({
        type: "CHANGE_NOTE",
        note: {
          ...note,
          text: e.target.value,
        },
      });
    }
  }

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (dispatch) {
      dispatch({
        type: "CHANGE_NOTE",
        note: {
          ...note,
          done: e.target.checked,
        },
      });
    }
  }

  function handleDelete() {
    if (dispatch) {
      dispatch({
        ...note,
        type: "DELETE_NOTE",
        id: note.id,
      });
    }
  }

  return (
    <>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeChecked}
        />
        {component}
        <button onClick={handleDelete}>Delete</button>
      </label>
    </>
  );
}

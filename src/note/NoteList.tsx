import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState<string>("");
  const searchInput = useRef<HTMLInputElement>(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleClickSearch() {
    if (searchInput.current) {
      setSearch(searchInput.current.value);
    }
  }

  return (
    <>
      <ul>
        <input type="text" placeholder="search" ref={searchInput} />
        <button onClick={handleClickSearch}>Search</button>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}

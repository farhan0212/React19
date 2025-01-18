import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;

export interface NoteType {
  id: number;
  text: string;
  done: boolean;
}

type NotesAction =
  | { type: "ADD_NOTE"; text: string }
  | { type: "CHANGE_NOTE"; note: NoteType }
  | { type: "DELETE_NOTE"; id: number };

const initialNotes = [
  { id: id++, text: "learn html", done: false },
  { id: id++, text: "learn css", done: false },
  { id: id++, text: "learn js", done: true },
  { id: id++, text: "learn react", done: false },
  { id: id++, text: "learn golang", done: false },
];

function notesReducer(notes: NoteType[], action: NotesAction) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.note.id);
    if (index !== -1) {
      notes[index].text = action.note.text;
      notes[index].done = action.note.done;
    }
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    if (index !== -1) {
      notes.splice(index, 1);
    }
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <h1>Note App</h1>
        <NoteForm />
        <NoteList />
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

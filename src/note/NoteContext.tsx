import { createContext } from "react";
import { NoteType } from "./NoteApp";

type NotesAction =
  | { type: "ADD_NOTE"; text: string }
  | { type: "CHANGE_NOTE"; note: NoteType }
  | { type: "DELETE_NOTE"; id: number };

export const NotesContext = createContext<NoteType[]>([]);
export const NotesDispatchContext =
  createContext<React.Dispatch<NotesAction> | null>(null);

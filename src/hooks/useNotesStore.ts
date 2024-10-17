import { useContext } from "react";
import { NotesContext } from "@/contexts/NotesContext";
import NotesStore from "@/store";

export const useNotesStore = (): NotesStore => useContext(NotesContext) as NotesStore;

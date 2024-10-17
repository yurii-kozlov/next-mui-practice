import { createContext } from "react";
import NotesStore from "@/store";

export const NotesContext = createContext<NotesStore | null>(null);

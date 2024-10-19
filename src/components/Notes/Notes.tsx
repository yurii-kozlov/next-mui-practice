import { Note } from "@/types/Note";
import { FC } from "react";

interface NotesProps {
  notes: Note[];
};

export const Notes: FC<NotesProps> = ({ notes }) => {
  console.log(notes)
  return (
    <div>
      {notes.map(({ title, id }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
};
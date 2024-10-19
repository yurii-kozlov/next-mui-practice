'use client';

import { Note } from "@/types/Note";
import { Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { NoteCard } from "./NoteCard";
import { useNotesStore } from "@/hooks/useNotesStore";
import { observer } from "mobx-react-lite";

interface NotesProps {
  notes: Note[];
}

export const Notes: FC<NotesProps> = observer(({ notes }) => {
  console.log('server', notes)
  const notesStore = useNotesStore();
  // notesStore.setNotes(notes);
  useEffect(() => {
    notesStore.setNotes(notes);
  }, [])

  const currentNotes = notesStore.updatedNotes.length > 0 
   ? notesStore.updatedNotes
   : notes

  console.log(notesStore.updatedNotes.length)

  return (
    <div>
      <Grid container spacing={15}>
        {currentNotes.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteCard note={note}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
});

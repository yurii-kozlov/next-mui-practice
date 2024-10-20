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
  const notesStore = useNotesStore();

  useEffect(() => {
    notesStore.setNotes(notes);
  }, [])

  return (
    <div>
      <Grid container spacing={15}>
        {notesStore.notes.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteCard note={note}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
});

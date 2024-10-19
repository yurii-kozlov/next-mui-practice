import { Note } from "@/types/Note";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FC } from "react";

interface NotesProps {
  notes: Note[];
}

export const Notes: FC<NotesProps> = ({ notes }) => {

  return (
    <div>
      <Grid container>
        {notes.map(({ title, id }) => (
          <Grid key={id} item xs={12} md={6} lg={4}>
            <Paper>{title}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

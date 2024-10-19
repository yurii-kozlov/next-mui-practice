import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Note } from "@/types/Note";
import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { useNotesStore } from "@/hooks/useNotesStore";

interface NoteCardProps {
  note: Note;
}

export const NoteCard: FC<NoteCardProps> = observer(({ note }) => {
  const { title, category, details, id } = note;
  const notesStore = useNotesStore();

  return (
    <div>
      <Card elevation={10}>
        <CardHeader
          title={title}
          subheader={category}
          action={
          <IconButton onClick={() => notesStore.deleteNote(id)}>
            <DeleteOutlineOutlined />
          </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">{details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
});

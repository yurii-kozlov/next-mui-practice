import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Note } from "@/types/Note";
import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { useNotesStore } from "@/hooks/useNotesStore";
import { StyledCard } from "./NoteCart.style";
import { Category } from "@/types/Category";

interface NoteCardProps {
  note: Note;
}

export const NoteCard: FC<NoteCardProps> = observer(({ note }) => {
  const { title, category, details, id } = note;
  const notesStore = useNotesStore();
  const isWorkCategory = category === Category.Work

  return (
    <div>
      <StyledCard elevation={10} isWorkCategory={isWorkCategory}>
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
      </StyledCard>
    </div>
  );
});

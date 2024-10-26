import { notesService } from "@/services/notesService";
import { Notes } from "@/components/Notes";
import { Typography } from "@mui/material";

const CreatePage = async () => {
  const { error, result: notes } = await notesService.fetchNotes();

  if (error) {
    return <Typography variant="body2">{error}</Typography>
  }

  if (!error && notes) {
    return <Notes notes={notes}/>
  }
};

export default CreatePage;

'use client';

import { observer } from "mobx-react-lite";
import { StyledSubmitButton, StyledTitle, StyledTextfield, StyledFormControl } from "./CreateNotes.style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNotesStore } from "@/hooks/useNotesStore";
import { ChangeEvent, FormEvent } from "react";
import { RadioGroup, Radio, FormControlLabel, FormLabel } from "@mui/material";
import { Category } from "@/types/Category";
import { notesService } from "@/services/notesService";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";

export const CreateNotes = observer(
  () => {
    const notesStore = useNotesStore();
    const router = useRouter();
    const { title, details, isDetailsError, isTitleError, category } = notesStore;

    const handleSubmit = async (event: FormEvent): Promise<void> => {
      event.preventDefault();
      notesStore.setIsTitleError(false);
      notesStore.setIsDetailsError(false);

      if (title === "") {
        notesStore.setIsTitleError(true);
      }

      if (details === "") {
        notesStore.setIsDetailsError(true);
      }

      if (title && details) {
        await notesService.postNote({ title, details, category, id: String(Math.random())});
        router.push(ROUTES.NOTES);
      }
    };

    const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
      notesStore.setCategory(event.target.value as Category);
    };

    return (
      <div>
        <StyledTitle variant="h5" color="textSecondary" gutterBottom>
          Create a new note
        </StyledTitle>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <StyledTextfield
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            onChange={(e) => notesStore.setTitle(e?.target.value)}
            error={isTitleError}
          />
          <StyledTextfield
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            error={isDetailsError}
            fullWidth
            required
            onChange={(e) => notesStore.setDetails(e?.target.value)}
          />

          <StyledFormControl>
            <FormLabel>Category</FormLabel>
            <RadioGroup defaultValue={Category.Money} value={category} onChange={handleCategoryChange}>
              <FormControlLabel value="money" control={<Radio />} label="Money" />
              <FormControlLabel value="todos" control={<Radio />} label="Todos" />
              <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </StyledFormControl>

          <StyledSubmitButton type="submit" color="secondary" variant="contained" endIcon={<ArrowForwardIcon />}>
            Submit
          </StyledSubmitButton>
        </form>

        {/* <Button type="submit">
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      </div>
    );
  },
);

import { action, makeObservable, observable } from "mobx";
import { Category } from "./types/Category";
import { notesService } from "./services/notesService";
import { Note } from "./types/Note";

class NotesStore {
  title: string = '';
  details: string= '';
  isTitleError: boolean = false;
  isDetailsError: boolean = false;
  category: Category = Category.Money;
  notes: Note[] = [];

  constructor() {
    makeObservable(this, {
      title: observable,
      details: observable,
      isDetailsError: observable,
      isTitleError: observable,
      category: observable,
      notes: observable,
      setTitle: action,
      setDetails: action,
      setIsDetailsError: action,
      setIsTitleError: action,
      setCategory: action,
      setNotes: action,
      deleteNote: action
    })
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  };

  setDetails(newDetails: string): void {
    this.details = newDetails;
  };

  setIsTitleError(isTitleError: boolean): void {
    this.isTitleError = isTitleError;
  };

  setIsDetailsError(isDetailsError: boolean): void {
    this.isDetailsError = isDetailsError;
  };

  setCategory(newCategory: Category): void {
    this.category = newCategory;
  };

  setNotes(notes: Note[]): void {
    this.notes = notes;
  };

  async deleteNote(id: string): Promise<void> {
    await notesService.deleteNote(id);
    const updatedNotes = this.notes.filter((note) => note.id !== id);

    this.notes = updatedNotes;
  }
};

export default NotesStore;

import { action, makeObservable, observable } from "mobx";
import { Category } from "./types/Category";

class NotesStore {
  title: string = '';
  details: string= '';
  isTitleError: boolean = false;
  isDetailsError: boolean = false;
  category: Category = Category.Money

  constructor() {
    makeObservable(this, {
      title: observable,
      details: observable,
      isDetailsError: observable,
      isTitleError: observable,
      category: observable,
      setTitle: action,
      setDetails: action,
      setIsDetailsError: action,
      setIsTitleError: action,
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
  }
};

export default NotesStore;

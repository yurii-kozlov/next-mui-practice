import { Category } from "./Category";

export interface Note {
  title: string;
  details: string;
  category: Category;
  id: string;
}

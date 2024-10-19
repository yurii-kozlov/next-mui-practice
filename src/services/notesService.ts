import { ApiResponse } from "@/types/api";
import { Note } from "@/types/Note";
import { apiInstance } from "@/axiosConfig";
import { AxiosError } from "axios";

class NotesService {
  async fetchNotes(): Promise<ApiResponse<Note[]>> {
    try {
      const result = await apiInstance.get<Note[]>('/notes');

      return { result: result.data, error: null }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return {result: null, error: axiosError.message || 'Error happened during the request'};
    }
  }

  async postNote(note: Note): Promise<ApiResponse<string>> {
    try {
      await apiInstance.post<Note>('/notes', { ...note });

      return { result: 'OK', error: null }
    } catch (error) {
      const axiosError = error as AxiosError;
      return {result: null, error: axiosError.message || 'Error happened during the request'};
    }
  }
}

export const notesService = new NotesService();

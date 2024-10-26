export interface ApiResponse<T> {
  result: T | null;
  error: string | null;
}

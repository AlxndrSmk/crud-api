export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}

export interface ApiResponse<T> {
  status: number;
  data?: T;
}

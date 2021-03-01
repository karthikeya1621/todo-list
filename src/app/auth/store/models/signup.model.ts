export interface User {
  username: string;
  password: string;
}

export type CurrentUser = { username: string } | null;

export interface IProject {
  name: string;
  type: string;
  authorID: string;
  token: string;
  tasks?: string[] | null;
}

export interface Task {
  id: string;
  title: string;
  createdAt: string | Date;
  completed: boolean;
}
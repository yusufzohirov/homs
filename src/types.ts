export type Todo = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  
  images: {
    id: number;
    imageName: string;
  }[];
};
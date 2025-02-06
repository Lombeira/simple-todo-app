import { v4 as uuidv4 } from "uuid";

export const TODOS_MOCK = [
  {
    id: uuidv4(),
    title: "Setup development environment",
    completed: true,
    assignedTo: "",
  },
  {
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
    assignedTo: "",
  },
  {
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
    assignedTo: "",
  },
]
import { v4 as uuidv4 } from "uuid";

export const TODOS_MOCK = [
  {
    id: uuidv4(),
    title: "Setup development environment",
    assignedTo: "",
    status: "todo"
  },
  {
    id: uuidv4(),
    title: "Develop website and add content",
    assignedTo: "",
    status: "in-progress"
  },
  {
    id: uuidv4(),
    title: "Deploy to live server",
    assignedTo: "",
    status: "done"
  },
]
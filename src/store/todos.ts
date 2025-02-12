import { create } from 'zustand';
import { TODOS_MOCK } from '../mocks/todo';

export interface TodoProps {
  id: string;
  title: string;
  assignedTo: string;
  status: string;
}

interface useTodoStoreProps {
  todos: TodoProps[];
  selectedTodo: TodoProps | null;

  setSelectedTodo: (todo: TodoProps | null) => void;
  addTodo: (todo: TodoProps) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: TodoProps) => void;
}

export const useTodosStore = create<useTodoStoreProps>()((set) => ({
  todos: TODOS_MOCK,
  selectedTodo: null,

  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === todo.id ? { ...todo } : item
      ),
    })),
}));

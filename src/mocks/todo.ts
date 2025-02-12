import { v4 as uuidv4 } from 'uuid';

export const TODOS_MOCK = [
  {
    id: uuidv4(),
    title: 'Setup development environment',
    assignedTo: '1',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Develop website and add content',
    assignedTo: '2',
    status: 'in-progress',
  },
  {
    id: uuidv4(),
    title: 'Deploy to live server',
    assignedTo: '3',
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'Setup development environment',
    assignedTo: '2',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Develop website and add content',
    assignedTo: '3',
    status: 'in-progress',
  },
  {
    id: uuidv4(),
    title: 'Deploy to live server',
    assignedTo: '',
    status: 'done',
  },
];

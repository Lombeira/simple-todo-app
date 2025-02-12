import { Flex, Select } from '@chakra-ui/react';
import { TodoProps, useTodosStore } from '../store/todos';
import { useUsersStore } from '../store/users';

interface TodoItemProps {
  todo: TodoProps;
  onOpen: () => void;
}

export const TodoItem = ({ todo, onOpen }: TodoItemProps) => {
  const { users } = useUsersStore();
  const { updateTodo, setSelectedTodo } = useTodosStore();

  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { status, title, assignedTo } = todo;

  const assignedUserName =
    assignedTo && users.find((user) => user.id === assignedTo)?.name;

  const isCompleted = status === 'done';

  const handleClickTodo = () => {
    setSelectedTodo(todo);
    onOpen();
  };

  return (
    <Flex
      flexDir='column'
      border='1px solid #ccc'
      borderRadius='md'
      cursor='pointer'
      p={4}
      gap={5}
      onClick={handleClickTodo}
    >
      <p style={isCompleted ? completedStyle : undefined}>{title}</p>
      <Select
        name='status'
        id='status'
        value={status}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => updateTodo({ ...todo, status: e.target.value })}
      >
        <option value='todo'>Todo</option>
        <option value='in-progress'>In Progress</option>
        <option value='done'>Done</option>
      </Select>
      {assignedUserName && <p>{assignedUserName}</p>}
    </Flex>
  );
};

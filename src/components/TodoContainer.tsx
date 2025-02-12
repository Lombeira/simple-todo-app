import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { TodoDetailsDrawer } from './TodoDetails';
import { TodosList } from './TodosList';
import { useTodosStore } from '../store/todos';

export const TodoContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSelectedTodo } = useTodosStore();

  const handleClose = () => {
    setSelectedTodo(null);
    onClose();
  };

  return (
    <Flex flexDir='column' w='full' gap={4}>
      <Button alignSelf='flex-end' onClick={() => onOpen()}>
        New Todo
      </Button>
      <TodosList onOpen={onOpen} />
      <TodoDetailsDrawer isOpen={isOpen} onClose={handleClose} />
    </Flex>
  );
};

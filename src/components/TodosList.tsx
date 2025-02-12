import { TodoItem } from './TodoItem';
import { useTodosStore } from '../store/todos';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

interface TodosListProps {
  onOpen: () => void;
}

export const TodosList = ({ onOpen }: TodosListProps) => {
  const { todos } = useTodosStore();

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      w='full'
      gap={4}
    >
      <Box minH={{ base: 'fit-content', lg: '600px' }}>
        <Heading size='sm' mb={4}>
          Todo
        </Heading>
        <Flex gap={4} flexDir='column'>
          {todos.map(
            (todo) =>
              todo.status === 'todo' && (
                <TodoItem onOpen={onOpen} key={todo.id} todo={todo} />
              )
          )}
        </Flex>
      </Box>
      <Box minH={{ base: 'fit-content', lg: '600px' }}>
        <Heading size='sm' mb={4}>
          In Progress
        </Heading>
        <Flex gap={4} flexDir='column'>
          {todos.map(
            (todo) =>
              todo.status === 'in-progress' && (
                <TodoItem onOpen={onOpen} key={todo.id} todo={todo} />
              )
          )}
        </Flex>
      </Box>
      <Box minH={{ base: 'fit-content', lg: '600px' }}>
        <Heading size='sm' mb={4}>
          Done
        </Heading>
        <Flex gap={4} flexDir='column'>
          {todos.map(
            (todo) =>
              todo.status === 'done' && (
                <TodoItem onOpen={onOpen} key={todo.id} todo={todo} />
              )
          )}
        </Flex>
      </Box>
    </Grid>
  );
};

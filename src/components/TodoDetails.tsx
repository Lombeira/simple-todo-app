import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodosStore } from '../store/todos';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  Flex,
} from '@chakra-ui/react';

import { useUsersStore } from '../store/users';
import { useEffect } from 'react';

const TodoSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  assignedTo: z.string().optional(),
});

type TodoSchemaType = z.infer<typeof TodoSchema>;

interface TodoDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TodoDetailsDrawer = ({
  isOpen,
  onClose,
}: TodoDetailsDrawerProps) => {
  const { addTodo, selectedTodo, deleteTodo, setSelectedTodo, updateTodo } =
    useTodosStore();
  const { users } = useUsersStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoSchemaType>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(TodoSchema),
  });

  useEffect(() => {
    if (selectedTodo) {
      reset(selectedTodo);
      return;
    }

    reset({ title: '', assignedTo: '' });
  }, [selectedTodo, reset]);

  const onSubmit = (data: TodoSchemaType) => {
    if (selectedTodo) {
      updateTodo({
        ...selectedTodo,
        title: data.title,
        assignedTo: data.assignedTo || 'unassigned',
      });
      setSelectedTodo(null);
      onClose();

      return;
    }

    addTodo({
      id: Math.random().toString(),
      title: data.title,
      assignedTo: data.assignedTo || 'unassigned',
      status: 'todo',
    });
    onClose();
  };

  const handleDeleteTodo = () => {
    if (selectedTodo) {
      deleteTodo(selectedTodo.id);
      setSelectedTodo(null);
      onClose();
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' size='md' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Todo Card</DrawerHeader>

          <DrawerBody>
            <Flex flexDir='column' gap={6}>
              <FormControl isInvalid={!!errors.title?.message}>
                <FormLabel>Title</FormLabel>
                <Input {...register('title')} />
                {!errors.title?.message ? (
                  <FormHelperText>
                    Enter a title for your todo card.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.assignedTo?.message}>
                <FormLabel>Assigned to</FormLabel>
                <Select placeholder='Select user' {...register('assignedTo')}>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Select>
                {!errors.assignedTo?.message ? (
                  <FormHelperText>
                    Assign the todo card to a user.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>
                    {errors.assignedTo?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex justifyContent='space-between' w='full'>
              <Flex>
                {selectedTodo && (
                  <Button colorScheme='red' mr={3} onClick={handleDeleteTodo}>
                    Delete
                  </Button>
                )}
              </Flex>
              <Flex>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit(onSubmit)} colorScheme='blue'>
                  Save
                </Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

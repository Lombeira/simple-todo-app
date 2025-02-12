import { Box, Flex, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router';

const navData = [
  {
    name: 'Task List',
    to: '/task-list',
  },
  {
    name: 'Analytics',
    to: '/analytics',
  },
];

export const Header = () => {
  return (
    <Flex
      as='header'
      position='fixed'
      top='0'
      right='0'
      bgColor='white'
      w='100%'
      boxShadow='md'
      h='16'
    >
      <Flex alignItems='center' h='full' w='5xl' m='auto' px='4'>
        <Box
          transition={'color 0.2s linear'}
          as={NavLink}
          to='/task-list'
          _hover={{ color: 'blue.600' }}
        >
          <Heading fontWeight='bold' size='md'>
            Todos.
          </Heading>
        </Box>

        <Flex as='nav' gap={4} ml='auto'>
          {navData.map((nav) => (
            <Box
              transition={'color 0.2s linear'}
              key={nav.to}
              as={NavLink}
              to={nav.to}
              px='4'
              py='2'
              _hover={{ color: 'blue.600' }}
            >
              {nav.name}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

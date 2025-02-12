import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { Header } from './components/Header';

export const Layout = () => (
  <>
    <Header />
    <Flex w='full' maxW='5xl' m='auto' mt={24} px='4'>
      <Outlet />
    </Flex>
  </>
);

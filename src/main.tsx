import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './routes';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </StrictMode>
);

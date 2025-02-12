import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './App';
import { TodoContainer } from './components/TodoContainer';
import { Analytics } from './components/Analytics';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodoContainer />} />
          <Route path='/task-list' element={<TodoContainer />} />
          <Route path='/analytics' element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

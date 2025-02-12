import { create } from 'zustand';
import { USERS_MOCK } from '../mocks/user';

export interface UserProps {
  id: string;
  name: string;
}

interface useUserStoreProps {
  users: UserProps[];
}

export const useUsersStore = create<useUserStoreProps>()(() => ({
  users: USERS_MOCK,
}));

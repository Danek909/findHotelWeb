import create, { StoreApi, UseBoundStore } from 'zustand';


type User = {
  username: string;
  password: string;
};

type propsType = {
  users: User[],
  currentUser: {} | null;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
}

const useAuthStore: UseBoundStore<StoreApi<propsType>> = create(
  (set: (arg0: (state: propsType) => propsType) => any,
    get: () => propsType
  ) => ({
    users: [],
    currentUser: {}

    updateUsers: (user: User) => {
      const users = get().users;
      users?.unshift(user);
      set((state: propsType) => ({ ...state, users }));
    },

    registerUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
    loginUser: (username, password) => set((state) =>
      ({ currentUser: state.users.find(user => user.username === username && user.password === password) })),
    logoutUser: () => set({ currentUser: null }),

  }));

export default useAuthStore;
import create, { StoreApi, UseBoundStore } from 'zustand';


type User = {
  username: string;
  password: string;
};

type propsType = {
  updateUsers: any;
  users: User[],
  currentUser: User | null;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
}

const useAuthStore: UseBoundStore<StoreApi<propsType>> = create(
  (
    set: (arg0: (state: propsType) => propsType) => any,
    get: () => propsType
  ) => ({
    users: [],
    currentUser: null,

    updateUsers: (user: User) => {
      const users = get().users;
      users?.unshift(user);
      set((state: propsType) => ({ ...state, users }));
  },

    registerUser: (user: User) =>
      set((state) => ({
        ...state,
        users: [...state.users, user]

      })),

    loginUser: (username, password) =>
      set((state) => ({
        ...state,
        currentUser:
          state.users.find(
            (user) => user.username === username && user.password === password
          ) || null,
      })),


    logoutUser: () => set((state) => ({ ...state, currentUser: null })),

  }));

export default useAuthStore;
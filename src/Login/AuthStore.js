import create from 'zustand';

const useAuthStore = create((set, get) => ({
  users: [],
  currentUser: {},

  updateUsers: (user) => {
    const users = get().users;
    users?.unshift(user);
    set(state => ({ ...state, users }));
  },

  registerUser: (user) => set((state) => ({ users: [...state.users, user] })),
  loginUser: (username, password) => set((state) =>
    ({ currentUser: state.users.find(user => user.username === username && user.password === password)})),
  logoutUser: () => set({ currentUser: null }),

}));


export default useAuthStore;
import {create} from "zustand";

const useStore = create((set) => ({
  userToken: null,
  setToken: (token) => set(() => ({ userToken: token })),
   clearCart: () => set(()=>({ userToken :null})),
}));

export default useStore;

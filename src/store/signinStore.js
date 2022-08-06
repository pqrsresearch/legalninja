import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const signinStore = create(
  devtools((set, get) => ({
    signin: true,
    uname: '',
    setUname: data => set({uname: data}),
    setSignin: data => set({signin: data}),
  }))
);
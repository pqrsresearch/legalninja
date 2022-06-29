import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const signinStore = create(
  devtools((set, get) => ({
    signin: true,
    setSignin: data => set({signin: data}),
  }))
);
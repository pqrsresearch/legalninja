import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const agreementStore = create(
  devtools((set, get) => ({
    copyOfAgreement: {},
    setCopyOfAgreement: data => set({copyOfAgreement: data}),
  }))
);
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const entityStore = create(
  devtools((set, get) => ({
    lessee: "",
    lessor: "",
    address: "",
    date: "",
    amount: "",
    setLessee: data => set({lessee: data}),
    setLessor: data => set({lessor: data}),
    setAddress: data => set({address: data}),
    setDate: data => set({date: data}),
    setAmount: data => set({amount: data}),
  }))
);
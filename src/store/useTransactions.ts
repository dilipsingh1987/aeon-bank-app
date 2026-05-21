import { create } from 'zustand';
import { Transaction } from '../types/Transaction';

interface TransactionState {
  transactions: Transaction[];
  setTransactions: (data: Transaction[]) => void;
}

export const useTransactions = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (data) => set({ transactions: data }),
}));

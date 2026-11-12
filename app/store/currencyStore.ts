import { create } from 'zustand';

interface CurrencyState {
  rates: Record<string, Record<string, number>>;
  setRates: (rates: Record<string, Record<string, number>>) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  rates: {},
  setRates: (rates) => set({ rates }),
}));
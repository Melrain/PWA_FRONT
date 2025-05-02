import { create } from "zustand";

export interface ITelegramUser {
  id: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  avatar?: string;
  languageCode?: string;
  isBot?: boolean;
}

interface TelegramUserStore {
  user: ITelegramUser | null;
  setUser: (user: ITelegramUser) => void;
  clearUser: () => void;
}

export const useTelegramUserStore = create<TelegramUserStore>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),
}));

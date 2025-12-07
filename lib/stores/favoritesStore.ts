import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
    favorites: string[];
    setFavorite: (id: string) => void; 
    clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      setFavorite: (id: string) => {
        const current = get().favorites;
        if (current.includes(id)) {
          set({ favorites: current.filter(favorite => favorite !== id) });
        } else {
          set({ favorites: [...current, id] });
        }
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    { name: 'favorites' }
  )
);
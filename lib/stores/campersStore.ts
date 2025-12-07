import { Camper } from '@/types/camper';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { fetchCampers } from '../api';

interface CampersStore {
    campers: Camper[];
    total: number;
    page: number;
    isLoading: boolean;

    setCampersList: (filters: any) => Promise<void>;
    loadMore: (filters: any) => Promise<void>;
    clearCampersList: () => void;
}

export const useCampersStore = create<CampersStore>()(
    persist(
        (set, get) => ({
            campers: [],
            total: 0,
            page: 1,
            isLoading: false,

            setCampersList: async (filters) => {
        set({ isLoading: true, page: 1 });

        const data = await fetchCampers({
          ...filters,
          page: 1,
          limit: 4,
        });

        set({
          campers: data.items,
          total: data.total,
          isLoading: false,
          page: 1,
        });
      },

      loadMore: async (filters) => {
        const nextPage = get().page + 1;
        set({ isLoading: true });

        const data = await fetchCampers({
          ...filters,
          page: nextPage,
          limit: 4,
        });

        set({
          campers: [...get().campers, ...data.items],
          total: data.total,
          page: nextPage,
          isLoading: false,
        });
      },

      clearCampersList: () =>
        set({
          campers: [],
          total: 0,
          page: 1,
          isLoading: false,
        }),
    }),
    { name: 'campers' }
  )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface FiltersStore {
  location: string;
  equipment: string[];
  type: string;

  setFilters: (name: "location" | "type" | "equipment", value: string, add?: boolean) => void;
  clearFilters: () => void;
}

export const useFiltersStore = create<FiltersStore>()(
  persist(
    (set) => ({
      location: "",
      equipment: [],
      type: "",

      setFilters: (name, value, add) =>
        set((state) => {
          if (name === "equipment") {
            const newArray = add
              ? [...state.equipment, value]
              : state.equipment.filter((item) => item !== value);
            return { equipment: newArray };
          } else {
            return { [name]: value };
          }
        }),

      clearFilters: () =>
        set({
          location: "",
          equipment: [],
          type: "",
        }),
    }),
    { name: "filters" }
  )
);
"use client"
import css from "./page.module.css";
import CamperCard from "@/components/CamperCard/CamperCard";
import { useCampersStore } from "@/lib/stores/campersStore";
import { useFavoritesStore } from "@/lib/stores/favoritesStore";
import { useFiltersStore } from "@/lib/stores/filtersStore";
import { useEffect } from "react";

export default function CatalogClient() {
    const filters = useFiltersStore();
    const { campers, isLoading, setCampersList, loadMore } = useCampersStore();
    const { favorites, setFavorite } = useFavoritesStore();

    useEffect(() => {
        setCampersList(filters);
    }, [filters.location, filters.type, filters.equipment.join(',')]);

    
    return (
        <section className={css.container}>
            <div></div>
            <div>
                <ul className={css.list}>
                    {campers.map(camper =>
                        <li key={camper.id}><CamperCard camper={camper} /></li>
                    )}
                </ul>
            </div>
        </section>
    )
}
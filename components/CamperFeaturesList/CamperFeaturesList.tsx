import css from "./CamperFeaturesList.module.css";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import { features } from "@/config/config";
import { Camper } from "@/types/camper";

type Feature = {
    key: string;
    parentKey?: "transmission" | "engine";
    name: string;
    icon_id: string;
}

interface FeaturesListProps {
    camperData: Camper;
}

const getCamperFeatures = (camper: Camper, allFeatures: Feature[]): Feature[] => {
    return allFeatures.filter(feature => {
        if (feature.parentKey) {
            // Enum-поля: порівнюємо значення
            return camper[feature.parentKey] === feature.key;
        } else {
            // Boolean-поля: показуємо тільки true
            return camper[feature.key as keyof Camper] === true;
        }
    });
};

export default function CamperFeaturesList({camperData}: FeaturesListProps) {

    const camperFeatures = getCamperFeatures(camperData, features);

    return (
        <ul className={css.featuresBox}>
            {camperFeatures.map(feature =>
                <CamperFeatures key={feature.key} name={feature.name} icon_id={feature.icon_id} />
            )}
        </ul>
    )
}
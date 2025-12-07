// import { features } from "@/config/config"
import css from "./CamperFeatures.module.css";

interface FeaturesProps {
    name: string;
    icon_id: string
}

export default function CamperFeatures({name, icon_id}: FeaturesProps) {
    return (
        <li className={css.feature}>
            <svg width={20} height={20}>
                <use href={`/icons.svg#${icon_id}`}></use>
            </svg>
            <p className={css.name}>{name}</p>
        </li>
    );
}

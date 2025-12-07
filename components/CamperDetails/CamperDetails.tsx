import css from "./CamperDetails.module.css";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";
import VehicleDatails from "../VehicleDatails/VehicleDetails";
import { Camper } from "@/types/camper";

interface CamperProps {
    camper: Camper
}

export default function CamperDetails({camper}: CamperProps) {
    return (
        <div className={css.container}>
            <CamperFeaturesList camperData={camper}/>
            <VehicleDatails camper={camper}/>
        </div>
    )
}
import css from "./VehicleDatails.module.css";
import { Camper } from "@/types/camper";

interface VehicleProps{
    camper: Camper;
}

export default function VehicleDatails({camper}: VehicleProps) {
    return (
        <div className={ css.details}>
            <h3 className={css.title}>Vehicle details</h3>
            <hr className={css.hr}/>
            <ul className={css.list}>
                <li>
                    <div>
                        <p>Form</p>
                        <p>{camper.form}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Length</p>
                        <p>{camper.length}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Width</p>
                        <p>{camper.width}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Height</p>
                        <p>{camper.height}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Tank</p>
                        <p>{camper.tank}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Consumption</p>
                        <p>{camper.consumption}</p>
                    </div>
                </li></ul>
        </div>
    )
}
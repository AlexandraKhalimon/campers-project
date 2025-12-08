import { PropagateLoader } from "react-spinners";
import css from "./page.module.css";

const Loader = () => { 
    return (
        <div className={css.loader}>
            <PropagateLoader size={20} color="#D84343" />
        </div>
    )
}

export default Loader;
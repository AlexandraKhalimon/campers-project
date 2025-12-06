import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";

interface Props {
    camper: Camper;
}

export default function CamperCard({camper}:Props) {
    
    const reviews = camper.reviews;
    const totalReviews = reviews.length;
    const avarageScore = totalReviews === 0
        ? 0
        : (reviews.reduce((acc, review) => (acc + review.reviewer_rating), 0) / totalReviews).toFixed(1);
    
    return (
        <div className={css.card}>
            <Image
                src={camper.gallery[0].thumb}
                alt="Camper Photo"
                width={292}
                height={320}
            />
            <div className={css.camper}>
                <div className={css.info}>
                    <div className={css.container}>
                        <h2 className={css.name}>{camper.name}</h2>
                        <p className={css.price}>{camper.price}</p>
                        <button className={css.favourite}></button>
                    </div>
                    <ul className={css.list}>
                        <li>
                            <svg width={16} height={16}>
                                <use href="/icons.svg#icon-star_gold"></use>
                            </svg>
                            <p>{`${avarageScore} (${totalReviews}Reviews)`}</p>
                        </li>
                        <li className={css.location}>
                            <svg width={16} height={16}>
                                <use href="/icons.svg#icon-map"></use>
                            </svg>
                            <p>{camper.location}</p>
                        </li>
                    </ul>
                </div>
                <p className={css.description}>{camper.description}</p>
                {/* список Features */}
                <button className={css.btn}>Show more</button>
            </div>
        </div>
    )
}
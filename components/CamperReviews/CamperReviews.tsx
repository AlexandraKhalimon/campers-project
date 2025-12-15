import css from "./CamperReviews.module.css";
import { Review } from "@/types/camper";

interface ReviewsProps {
    reviews: Review[];
}

export default function CamperReviews({reviews}:ReviewsProps) {
    
    const getAvatar = (name: string) => {
        const initial = name.charAt(0).toUpperCase();
        return initial;
    }

    const ratings = [1, 2, 3, 4, 5];
    
    return (
        <ul className={css.list}>
            {reviews.map(review =>
                <li>
                    <div className={css.user}>
                        <div className={css.avatar}>
                            <p>{getAvatar(review.reviewer_name)}</p>
                        </div>
                        <div className={css.ratingInfo}>
                            <p className={css.name}>{review.reviewer_name}</p>
                            <div>
                                {ratings.map(star =>
                                    <svg width={16} height={16}>
                                        <use href={
                                            star <= review.reviewer_rating
                                                ? "/icons.svg#icon-star_gold"
                                                : "/icons.svg#icon-star"
                                        }></use>
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
            )}
        </ul>
    )
}
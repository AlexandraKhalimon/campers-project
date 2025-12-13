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
    
    return (
        <ul className={css.list}>
            {reviews.map(review =>
                <li>
                    <div className={css.user}>
                        <div className={css.avatar}>
                            <p>{getAvatar(review.reviewer_name)}</p>
                        </div>
                        <div>
                            <p className={css.name}>{review.reviewer_name}</p>
                            <div>
                                {/* Rating */}
                            </div>
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
            )}
        </ul>
    )
}
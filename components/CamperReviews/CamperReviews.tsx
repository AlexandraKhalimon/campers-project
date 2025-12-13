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
        <ul>
            {reviews.map(review =>
                <li>
                    <div>
                        <span>
                            {getAvatar(review.reviewer_name)}
                        </span>
                        <div>
                            <p>{review.reviewer_name}</p>
                            <div>
                                {/* Rating */}
                            </div>
                        </div>
                    </div>
                    <p>{review.comment}</p>
                </li>
            )}
        </ul>
    )
}
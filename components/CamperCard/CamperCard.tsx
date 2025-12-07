import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/lib/stores/favoritesStore";

interface Props {
    camper: Camper;
}

export default function CamperCard({ camper }: Props) {
    
    const router = useRouter();

    const { favorites, setFavorite } = useFavoritesStore();

    const isFavorite = favorites.includes(camper.id);
    
    const reviews = camper.reviews;
    const totalReviews = reviews.length;
    const avarageScore = totalReviews === 0
        ? 0
        : (reviews.reduce((acc, review) => (acc + review.reviewer_rating), 0) / totalReviews).toFixed(1);
    const price = camper.price.toFixed(2);

    const maxLength = 100;
    const shortDescription = camper.description.length > maxLength
        ? camper.description.slice(0, maxLength) + "..."
        : camper.description;
    
    return (
        <div className={css.card}>
            <Image
                src={camper.gallery[0].thumb}
                alt="Camper Photo"
                width={292}
                height={320}
                loading="eager"
                className={css.photo}
            />
            <div className={css.camper}>
                <div className={css.info}>
                    <div className={css.container}>
                        <h2 className={css.name}>{camper.name}</h2>
                        <div>
                            <p className={css.price}>{`€${price}`}</p>
                            <button className={css.favourite} onClick={()=> setFavorite(camper.id)}>
                                <svg width={26} height={24}>
                                    <use href={isFavorite
                                        ? "/icons.svg#icon-heart_red"
                                        : "/icons.svg#icon-heart"
                                    }
                                    ></use>  
                                </svg>
                            </button>
                        </div>
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
                <p className={css.description}>{shortDescription}</p>
                <CamperFeaturesList camperData={camper}/>
                <button className={css.btn} onClick={()=>router.push(`/catalog/${camper.id}`)}>Show more</button>
            </div>
        </div>
    )
}
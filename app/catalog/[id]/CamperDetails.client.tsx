"use client"

import css from "./page.module.css";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import fetchCamperById from "@/lib/api";
import Image from "next/image";
import { useState } from "react";
import BookingForm from "@/components/BookingForm/BookingForm";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import Loader from "@/app/loading";
import NotFound from "@/app/not-found";

export default function CamperDetailsClient() {
    const { id } = useParams<{id:string}>();

    const { data: camper, isLoading, error } = useQuery({
        queryKey: ['camper', id],
        queryFn: () => fetchCamperById(id),
        refetchOnMount: false,
    });

    if (isLoading) {
        return <Loader/>;
    }

    if (error || !camper) {
        return <NotFound/>;
    }

    const [activeTab, setActiveTab] = useState<string>("features");


    const reviews = camper.reviews;
    const totalReviews = reviews.length;
    const avarageScore = totalReviews === 0
        ? 0
        : (reviews.reduce((acc, review) => (acc + review.reviewer_rating), 0) / totalReviews).toFixed(1);
    const price = camper.price.toFixed(2);
    const images = camper.gallery || [];
    
    
    return (
            <div className={css.container}>
                <div className={css.info}>
                    <h2 className={css.name}>{camper.name}</h2>
                    <ul className={css.list}>
                        <li>
                            <svg width={16} height={16}>
                                <use href="/icons.svg#icon-star_gold"></use>
                            </svg>
                            <p>{`${avarageScore} (${totalReviews}Reviews)`}</p>
                        </li>
                        <li>
                            <svg width={16} height={16}>
                                <use href="/icons.svg#icon-map"></use>
                            </svg>
                            <p>{camper.location}</p>
                        </li>
                    </ul>
                    <p className={css.price}>{`€${price}`}</p>
                </div>
                <ul className={css.images}>
                    {images.map((image) =>
                        <li key={image.original}>
                            <Image
                                src={image.original}
                                alt="Camper Photo"
                                width={292}
                                height={312}
                                className={css.image}
                            />
                        </li>)}
                </ul>
                <p className={css.description}>{camper.description}</p>
                <div className={css.tabs_panel}>
                    <button
                        onClick={() => setActiveTab("features")}
                        className={activeTab === "features" ? css.activeBtn : ""}>Features
                    </button>
                    <button
                        onClick={() => setActiveTab("reviews")}
                        className={activeTab === "reviews" ? css.activeBtn : ""}>Reviews
                    </button>
                </div>
                <hr className={css.hr} />
                <div className={css.box}>
                    <CamperDetails camper={camper}/>
                    <BookingForm/>
                </div>
            </div>
    )
}
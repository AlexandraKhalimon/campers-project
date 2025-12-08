import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Camper } from "@/types/camper";
import fetchCamperById from "@/lib/api";
import CamperDetailsClient from "./CamperDetails.client";
import { Metadata } from "next";

interface CamperDetailsProps {
    params: Promise<{id: string}>
};

export async function generateMetadata({ params }: CamperDetailsProps): Promise<Metadata> {
    const { id } = await params;
    const camper = await fetchCamperById(id);

    return {
        title: `Camper: ${camper.name}`,
        description: camper.description.slice(0, 100),
        openGraph: {
            title: `Camper: ${camper.name}`,
            description: camper.description.slice(0, 100),
            url: `https://campers-project-rho.vercel.app/catalog/${id}`,
            images: [
                {
                    url: `${camper.gallery[0].thumb}`,
                    width: 1200,
                    height: 630,
                    alt: camper.name,
                },
            ],
            type: "website",
        }
    }; 
}

export default async function CamperDetails({ params }: CamperDetailsProps) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['camper', id],
        queryFn: () => fetchCamperById(id),
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CamperDetailsClient />
        </HydrationBoundary>
    )
}
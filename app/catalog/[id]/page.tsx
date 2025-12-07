import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Camper } from "@/types/camper";
import fetchCamperById from "@/lib/api";
import CamperDetailsClient from "./CamperDetails.client";

interface CamperDetailsProps {
    params: Promise<{id: string}>
};

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
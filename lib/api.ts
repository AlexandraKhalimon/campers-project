import axios from "axios";
import { Camper } from "@/types/camper";

interface fetchCampersResponse {
    items: Camper[];
    total: number;
    
}

interface fetchCampersParams {
    location?: string,
    form?: string,
    transmission?: string,
    AC?: boolean,
    bathroom?: boolean,
    kitchen?: boolean,
    TV?: boolean,
    radio?: boolean,
    refrigerator?: boolean,
    microwave?: boolean,
    gas?: boolean,
    water?: boolean,
    page: number,
    limit: number
}

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async ({
    location,
    form,
    transmission,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    page,
    limit }: fetchCampersParams): Promise<fetchCampersResponse> => {
    const response = await axios.get<fetchCampersResponse>("/campers", {
        params: {
            ...(location !== undefined && { location }),
            ...(form !== undefined && { form }),
            ...(transmission !== undefined && { transmission }),
            ...(AC !== undefined && { AC }),
            ...(bathroom !== undefined && { bathroom }),
            ...(kitchen !== undefined && { kitchen }),
            ...(TV !== undefined && { TV }),
            ...(radio !== undefined && { radio }),
            ...(refrigerator !== undefined && { refrigerator }),
            ...(microwave !== undefined && { microwave }),
            ...(gas !== undefined && { gas }),
            ...(water !== undefined && { water }),
            ...(page !== undefined && { page }),
            ...(limit !== undefined && { limit }),
        },
    });
    console.log(response.data);
    return response.data;
}
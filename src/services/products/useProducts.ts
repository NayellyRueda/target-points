import {useState, useEffect} from "react";
import { getProductsResponse } from "./interfaces";

export function useGetProducts (url:string) {
    const [data, setData] = useState<getProductsResponse[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .finally(() => setIsLoading(false));
    },[]);
        
    return { data, isLoading };
}
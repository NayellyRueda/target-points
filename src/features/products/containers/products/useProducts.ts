import moment from "moment";
import { useState, useMemo, useEffect } from "react";
import { getProductsResponse } from "services/products/interfaces";
import { dataCardProps } from "../interfaces";

export default function useProducts(data:getProductsResponse[]){
    const [showAll, setShowAll] = useState<Boolean | null>(true);
    const [buttonSelected, setButtonSelected] = useState<Boolean | null>(null);
    const [dataCard, setDataCard] = useState<dataCardProps>();

    useEffect(() => {
        const DEFAULT_DATE_TO_FILTER = "2022-12";

        const totalPoints = data
            .filter((item) => {
                const productDate = moment(item.createdAt);
                return item.is_redemption && productDate.format("YYYY-MM") === DEFAULT_DATE_TO_FILTER
            })
    
            .reduce(function(acum, item){

                return acum + item.points;
            }, 0);
        
            setDataCard({ totalPoints, month: "Diciembre" })
    }, [])

    const handleWinnersButtonClick = () => {
        setButtonSelected(true);
        setShowAll(false);
    };

    const handleLoserButtonClick = () => {
        setButtonSelected(false);
        setShowAll(false);
    };

    const handleAllButtonClick = () => {
        setButtonSelected(null);
        setShowAll(true);
    };

    const createListProducts = () => {
        if(showAll === true){
            return data;
        }else {
            const filtered = data?.filter((item) => item.is_redemption === buttonSelected);
            return filtered
        }
    };

    const rows = useMemo(createListProducts, [buttonSelected]);

    return { rows, dataCard, showAll, handleWinnersButtonClick, handleLoserButtonClick, handleAllButtonClick};
}
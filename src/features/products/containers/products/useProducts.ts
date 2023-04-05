import { useState, useMemo } from "react";
import { getProductsResponse } from "services/products/interfaces";

export default function useProducts(data:getProductsResponse[]){
    const [showAll, setShowAll] = useState<Boolean | null>(true);
    const [buttonSelected, setButtonSelected] = useState<Boolean | null>(null);

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

    return { rows, showAll, handleWinnersButtonClick, handleLoserButtonClick, handleAllButtonClick};
}
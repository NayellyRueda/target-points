import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import Container from "../../../../components/container";
import { ProductsProps } from "../interfaces";

import Button from "../../../../components/button";
import { ContainerButtons, Title, NameUser, TitleSection, ProductSection } from "./styles";
import InfoCardProduct from "../../components/info-card-product";
import Cardpoints from "../../components/card-points";

export default function Products (props: ProductsProps) {
    const { data } = props;
    const navigation = useNavigation();
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
    
    return (
        <Container>
               <>
                    <Title>Bienvenido de vuelta!</Title>
                    <NameUser>Ruben Rodriguez</NameUser>
                    <TitleSection>TUS PUNTOS</TitleSection>
                    <Cardpoints
                        month="Diciembre"
                        totalPoints="10,00.00"
                    />
                    <TitleSection>Tus Movimientos</TitleSection>
                    <ProductSection>
                        {rows?.map((item) => (
                            <InfoCardProduct
                                key={item.id}
                                product={item}
                                onPress={() => navigation.navigate('Detail', { item })}
                            />
                        ))}
                    </ProductSection>
                    {showAll ? (
                        <ContainerButtons>
                            <Button width="50%" text="Ganados" onPress={() => handleWinnersButtonClick()}/>
                            <Button width="50%" text="Canjeados" onPress={() => handleLoserButtonClick()}/>
                        </ContainerButtons>
                    ) : (
                        <Button text="Todos" onPress={handleAllButtonClick}/>
                    )}
                </>
        </Container>
    )
};
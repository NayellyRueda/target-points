import React from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "../../../../components/container";
import { ProductsProps } from "../interfaces";
import Button from "../../../../components/button";
import { ContainerButtons, Title, NameUser, TitleSection, ProductSection } from "./styles";
import InfoCardProduct from "../../components/info-card-product";
import Cardpoints from "../../components/card-points";
import useProducts from "./useProducts";

export default function Products (props: ProductsProps) {
    const { data } = props;
    const navigation = useNavigation();
    const { rows, dataCard, showAll, handleWinnersButtonClick, handleLoserButtonClick, handleAllButtonClick } = useProducts(data);

    return (
        <Container>  
            <Title>Bienvenido de vuelta!</Title>
            <NameUser>Ruben Rodriguez</NameUser>
            <TitleSection>TUS PUNTOS</TitleSection>
            <Cardpoints
                month={dataCard?.month ?? ""}
                totalPoints={dataCard?.totalPoints.toLocaleString() ?? 0}
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
        </Container>
    )
};
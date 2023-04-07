import React from "react";
import { AntDesign } from '@expo/vector-icons'; 
import moment from "moment";

import { RowContainer, NameProduct, Date, ProductPoints, ContainerPoints, ContainerWidth, Image } from "./styles";
import { InfoCardProductProps } from "../interfaces";

export default function InfoCardProduct (props: InfoCardProductProps) {
    const { product, onPress } = props;
    return (
        <RowContainer onPress={onPress}>
            <ContainerWidth  width='25%'>
                <Image source={{uri: product?.image}}/>
            </ContainerWidth>
            <ContainerWidth width='50%'>
                <NameProduct>{product?.product}</NameProduct>
                <Date>{moment(product?.createdAt).format('LL')}</Date>
            </ContainerWidth>
            <ContainerPoints>
                <ProductPoints color={product?.is_redemption ? 'green' : 'red'}>{product?.is_redemption ? '+' : '-'}</ProductPoints> 
                <ProductPoints>{product?.points?.toLocaleString()}</ProductPoints>
                <AntDesign name="right" size={15} color="black" />
            </ContainerPoints>
        </RowContainer>
    )
}
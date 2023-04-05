import React from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Container from "../../../../components/container";
import Button from "../../../../components/button";
import { colors } from "../../../../theme/custom-theme";
import { CardImage, ContainerDescription, Image, TextDescriptions } from "./styles";

export default function DetailScreen ({route}) {
    const { item } = route.params;
    moment.locale('es')
    const navigation = useNavigation();

    return (
        <Container>
            <>
                <CardImage>
                    <Image source={{uri: item.image }} />
                </CardImage>
                <ContainerDescription>
                    <TextDescriptions color={colors.scalesGrey.gris_60MB}>Detalles del producto: {item.product}</TextDescriptions>
                    <TextDescriptions>Comprado en {moment(item.createdAt).format('LL')}</TextDescriptions>
                    <TextDescriptions color={colors.scalesGrey.gris_60MB}>Con esta compra {item.is_redemption ? 'acumulaste' : 'canjeaste'}:</TextDescriptions>
                    <TextDescriptions fontSize={22}>{item.points.toLocaleString()} puntos</TextDescriptions>
                </ContainerDescription>
                <Button onPress={() => navigation.goBack()} text="Aceptar"/>
            </>
        </Container>
    );
}


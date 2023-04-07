import styled from "styled-components/native";
import { PointsText, ContainerWidthProps } from "../interfaces";

export const ContainerPoints = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
`; 

export const ContainerWidth = styled.View<ContainerWidthProps>`
    width: ${({ width }) => width};
`;

export const Date = styled.Text`
    font-size: 12px;
    margin-top: 8px;
`;

export const Image = styled.Image`
    height: 60px;
    width: 80px;
    border-radius: 10px;
`;

export const NameProduct = styled.Text`
    font-weight: 600;
`;

export const ProductPoints = styled.Text<PointsText>`
    font-weight: 600;
    color: ${({ color }) => color ?? "black"};
`;

export const RowContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
    align-items: center;
`; 
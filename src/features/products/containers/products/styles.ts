import styled from "styled-components/native";
import { colors } from "../../../../theme/custom-theme";

export const ContainerButtons = styled.View`
    margin-top: 10px; 
    flex-direction: row; 
    justify-content: space-evenly; 
    display: flex; 
    width: 100%;
`;

export const Title = styled.Text`
    font-weight: 700;
    font-size: 20px;
`;

export const NameUser = styled.Text`
    font-size: 17px;
`;

export const TitleSection = styled.Text`
    text-transform: uppercase;
    margin: 15px 0px;
    color: ${colors.scalesGrey.gris_60MB};
    font-weight: 600;
`; 

export const ProductSection = styled.ScrollView`
    background-color: ${colors.white};
    border-radius: 12px;
    padding: 10px;
    max-height: 340px;
`;
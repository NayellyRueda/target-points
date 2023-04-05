import styled from "styled-components/native";
import { colors } from "../../../../theme/custom-theme";

export const Card = styled.View`
    background-color: ${colors.blue.hue};
    border-radius: 15px;
    padding: 20px;
    height: 160px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextMonth = styled.Text`
    color: ${colors.white};
    font-weight: 700;
    font-size: 18px;
    line-height: 40px;
`;

export const TotalPoints = styled.Text`
    color: ${colors.white};
    font-size: 35px;
    font-weight: 700;
    text-align: center;
`;
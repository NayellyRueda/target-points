import styled from "styled-components/native";
import { colors } from "../../theme/custom-theme";
import { TextProps, TouchableProps } from "../interface";

export const Touchable = styled.TouchableOpacity<TouchableProps>`
    background-color: ${({ background }) => (background ? colors.blue.hue : colors.blue.hue)};
    margin: 22px;
    border-radius: 12px;
    padding: 15px;
    width: ${({ width }) => `${width}`};
`;

export const TextButton = styled.Text<TextProps>`
    text-align: center;
    font-weight: bold;
    color: ${({ color }) => (color ? 'red' : colors.white)};
`;
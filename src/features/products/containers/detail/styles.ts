import styled from "styled-components/native";
import { TextProps } from "../interfaces";

export const CardImage = styled.View`
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    height: 400px;
`; 

export const ContainerDescription = styled.View`
    margin: 25px 0px;
`;

export const Image = styled.Image`
    border-radius: 14px;
    width: 100%;
    height: 100%;
`;

export const TextDescriptions = styled.Text<TextProps>`
    font-weight: 600;
    color: ${({ color }) => color ?? ""};
    font-size: ${({ fontSize }) => fontSize};
    line-height: 32px;
`;
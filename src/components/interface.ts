import { ReactNode } from "react";

export type TouchableProps = {
    background?: string;
    width?: string; 
};

export type TextProps = {
    color?: string;
};

export interface ButtonProps {
    onPress?: () => void;
    text?: string;
    width?: string;
};

export interface ContainerProps {
    children: JSX.Element | ReactNode;
};
import React from "react";
import {View, Text} from "react-native";
import { Touchable, TextButton } from "./styles";

interface ButtonProps {
    onPress?: () => void;
    text?: string;
    width?: string;
}

export default function Button (props: ButtonProps) {
    const { text, onPress, width } = props;

    return (
        <Touchable width={width} onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Touchable>
    )
}
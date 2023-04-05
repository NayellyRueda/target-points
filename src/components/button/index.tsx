import React from "react";
import { Touchable, TextButton } from "./styles";
import { ButtonProps } from "../interface";

export default function Button (props: ButtonProps) {
    const { text, onPress, width } = props;

    return (
        <Touchable width={width} onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Touchable>
    )
}
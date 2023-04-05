import React from "react"
import { View } from "react-native";

import { Layout } from "./styles";

interface ContainerProps {
    children: JSX.Element;
}

export default function Container (props: ContainerProps) {
    const { children } = props;

    return (
        <Layout>
            {children}
        </Layout>
    )
}
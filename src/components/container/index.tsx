import React from "react"
import { ContainerProps } from "../interface";

import { Layout } from "./styles";


export default function Container (props: ContainerProps) {
    const { children } = props;

    return (
        <Layout>
            {children}
        </Layout>
    )
}
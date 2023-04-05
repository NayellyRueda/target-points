import React from "react";

import { Card, TextMonth, TotalPoints } from "./styles";
import { CardPointsProps } from "../interfaces";

export default function Cardpoints (props: CardPointsProps) {
    const { month, totalPoints } = props; 

    return (
        <Card>
            <TextMonth>{month}</TextMonth>
            <TotalPoints>{totalPoints} pts</TotalPoints>
        </Card>  
    );
}
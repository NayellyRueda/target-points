import { getProductsResponse } from "services/products/interfaces";

export interface CardPointsProps {
    month: string;
    totalPoints: string | number;
};

export interface InfoCardProductProps {
    product: getProductsResponse;
    onPress: () => void;
};

export interface PointsText {
    color?: string;
};

export interface ContainerWidthProps {
    width?: string;
};
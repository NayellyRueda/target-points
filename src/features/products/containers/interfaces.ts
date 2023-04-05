import { getProductsResponse } from "services/products/interfaces";

export interface ProductsProps {
    data: getProductsResponse[];
};

export interface TextProps {
    fontSize?: number;
    color?: string;  
};
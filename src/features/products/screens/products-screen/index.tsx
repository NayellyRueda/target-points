import React from "react";
import { ActivityIndicator } from "react-native";
import Products from "../../containers/products";
import { useGetProducts } from "../../../../services/products/useProducts";
import { colors } from "../../../../theme/custom-theme";

export default function ProductsSreen (){
    const { data, isLoading } = useGetProducts("https://6222994f666291106a29f999.mockapi.io/api/v1/products")
    
    return (
        <>
            {isLoading ? (
                <ActivityIndicator 
                    size="small" 
                    color={colors.blue.hue}
                />   
            ) : (
                <Products data={data!}/>
            )}
        </>
    );
}
import React from "react";
import {View, Text } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./navigation";


export default function Root() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RootNavigator />
        </SafeAreaView>
    )
}
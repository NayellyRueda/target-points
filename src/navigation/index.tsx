import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../features/products/screens/products-screen';
import DetailScreen from '../features/products/containers/detail';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen 
            name="Products" 
            component={ProductsScreen} 
            options={{
                headerShown: false,
        }}/>
        <Stack.Screen 
            name="Detail" 
            component={DetailScreen} 
            options={{
                headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
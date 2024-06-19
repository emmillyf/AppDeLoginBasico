import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { BottomTabRoutes } from "./BottomTabRoutes";
import Login from "../pages/Login";

export type ParametrosDaRota = {
    StackLogin: {name: string};
    StackTabsPages: {name: string};
  }
  
  const StackBatatinha = createNativeStackNavigator<ParametrosDaRota>();
  
  export function StackRoutes() {
  
    return (
      <NavigationContainer>
        <StackBatatinha.Navigator screenOptions={{ headerShown: false }}>
  
          <StackBatatinha.Screen name="StackLogin" component={Login} />
          <StackBatatinha.Screen name="StackTabsPages" component={BottomTabRoutes} />
  
        </StackBatatinha.Navigator>
      </NavigationContainer>
    )
  }
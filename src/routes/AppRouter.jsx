import { Text, View } from "react-native";
import React from "react";
// ----- IMPORT ROUTES NAME ----- //
import { ROUTES } from "../constants/routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ---- SCREENS ---- //
import TabBarNavigation from "../navigation/TabBarNavigation";
import Notification from "../screens/routeScreen/Notification";
import ScreenNavigation from "../navigation/ScreenNavigation";

let Stack = createNativeStackNavigator();

const AppRouter = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={ScreenNavigation} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import screens
import NotificationScreen from "../screens/routeScreen/Notification";
import CountPassenger from "../screens/routeScreen/CountPerson";
// import SearchStack from "../screens/tabs/SearchScreen";
import CountPerson from "../screens/routeScreen/CountPerson";
import RouteDirection from "../screens/RouteDirection/RouteDirection";
import TabBarNavigation from "./TabBarNavigation";
import Notification from "../screens/routeScreen/Notification";
import EditData from "../screens/ProfileScreen/EditData";
const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tabbar" component={TabBarNavigation} />
      <Stack.Screen name="notificationScreen" component={Notification} />
      <Stack.Screen name="countPassenger" component={CountPassenger} />
      <Stack.Screen name="countPerson" component={CountPerson} />
      <Stack.Screen name="routeDirection" component={RouteDirection} />
      <Stack.Screen name="editUserData" component={EditData} />
    </Stack.Navigator>
  );
};

export default ScreenNavigation;

const styles = StyleSheet.create({});

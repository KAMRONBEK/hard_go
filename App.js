import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
// import screens
// import icons
// import navigation

import { NavigationContainer } from "@react-navigation/native";
import TabBarNavigation from "./src/navigation/TabBarNavigation.jsx";
import AppRouter from "./src/routes/AppRouter.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

const styles = StyleSheet.create({});

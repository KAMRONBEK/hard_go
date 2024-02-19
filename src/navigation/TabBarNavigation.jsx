import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import screens
import TravelStack from "./TravelStack.jsx";
import SearchStack from "./SearchStack.jsx";
import ProfileStack from "./ProfileStack.jsx";
import GoStack from "./GoStack.jsx";
import MessageStack from "./MessageStack.jsx";
// import icons
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome6,
  FontAwesome,
} from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Travel"
        component={TravelStack}
        options={{
          tabBarLabel: "Travel",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="magnifier" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GoScreen"
        component={GoStack}
        options={{
          tabBarLabel: "GoScreen",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="bubbles" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;

const styles = StyleSheet.create({});

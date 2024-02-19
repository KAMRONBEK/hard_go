import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ---- SCREEN ---- // 
import ProfileScreen from '../screens/tabs/ProfileScreen/Profile'
import Notification from '../screens/routeScreen/Notification';
import RegisterCar from '../screens/CarRegistation/CarRegistration'
import ChooseCarModel from '../screens/CarRegistation/ChooseCarModel'


let Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='profilescreen'  component={ProfileScreen}/>
            <Stack.Screen name='registercar'  component={RegisterCar}/>
            <Stack.Screen name='choosecarmodel'  component={ChooseCarModel}/>
        </Stack.Navigator>
  )
}

export default ProfileStack

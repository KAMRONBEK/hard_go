import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ----- SCREEN ---- //
import TravelScreen from '../screens/tabs/TravelScreen/Travel'
let Stack = createNativeStackNavigator()

const TravelStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='travelscreen'  component={TravelScreen}/>
    </Stack.Navigator>
  )
}

export default TravelStack

const styles = StyleSheet.create({})
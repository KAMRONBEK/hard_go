import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
let Stack = createNativeStackNavigator();
// ------ SCREENS ---- //
import GoScreen from '../screens/tabs/GoScreen/Go'
import Traveldriver from '../screens/TravelDriver/Traveldriver';
import Travelpassenger from '../screens/TravelPassenger/Travelpassenger';

const GoStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name='goscreen' component={GoScreen} />
        <Stack.Screen  name='traveldriver' component={Traveldriver} />
        <Stack.Screen  name='travelpassenger' component={Travelpassenger} />

    </Stack.Navigator>
  )
}

export default GoStack

const styles = StyleSheet.create({})
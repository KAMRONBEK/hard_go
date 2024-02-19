import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ---- SCREEN ---- //
import Search from '../screens/tabs/SearchScreen/Search'
import Notification from '../screens/routeScreen/Notification';
let Stack = createNativeStackNavigator()

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='searchscreen'  component={Search}/>
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})
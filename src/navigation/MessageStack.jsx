import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
let Stack = createNativeStackNavigator();
// ---- SCREEN ---- //
import MessageScren from '../screens/tabs/MessageScreen/Messages'

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name='messagescreen' component={MessageScren}/>
    </Stack.Navigator>
  )
}

export default MessageStack

const styles = StyleSheet.create({})
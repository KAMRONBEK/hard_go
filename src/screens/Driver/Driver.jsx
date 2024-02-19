import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
// import image 
import DataImage from '../../assets/images/datIcon.jpg'

const Driver = () => {
  return (
    <View style={{flexDirection:'column',alignItems:'center', justifyContent: 'center',}}>
      <Text style={{fontSize:18,fontWeight:'700',color:'#d3d3d3',marginTop:50}}>Sizda hali buyurtma yo'q</Text>
      <Image source={DataImage} style={{width:150,height:150,marginTop:15}}/> 
    </View>
  )
}

export default Driver

const styles = StyleSheet.create({})
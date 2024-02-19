import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
// import image 
import Message from '../../../assets/images/sendMessage.jpg'

const Messages = () => {
  return (
    <View style={{flexDirection:'column',paddingTop:45,paddingLeft:20,paddingRight:20,}}>
      <Text style={{fontSize:18,fontWeight:'500'}}>Xabarlar</Text>
      <View style={{alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:150}}>
        <Text style={{width:300,fontSize:16,fontWeight:'800',color:'#808080',textAlign: 'center'}}>Xabar yo'q.Sayohatdoshlar bilan bog'lanish uchun sayohatni band qiling yoki taklif qiling.</Text>
        <Image source={Message} style={{height:100,width:100}}/>
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})
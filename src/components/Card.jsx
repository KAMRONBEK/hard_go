import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
// import icons
import {
    SimpleLineIcons,
    MaterialIcons,
    FontAwesome6,
    FontAwesome,
    Ionicons,
    Fontisto,
    FontAwesome5,
    Entypo,
    Feather,
  } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
  // import navigation service

const Card = ({ title, description }) => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.card} onPress={goBack}>
        <Entypo name="back-in-time"  style={styles.timeIcon}/> 
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#FFFFFF',
        padding: 11,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        gap:10,
      },
      title: {
        fontSize: 18,
        fontWeight: '500',
      },
      timeIcon:{
        fontSize:22,
        color:'#a9a9a9',
      },
      
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
// import icons
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome6,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
// ----- CarRegister ----- //
import CarBackground from '../../assets/images/carRegisterHardGo.png'

const CarRegistration = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack()
  }
  const goNext = () => {
    navigation.navigate("choosecarmodel")
  }

  return (
    <View style={styles.containerStyle}>
      <View style={styles.backDiv}>
        <TouchableOpacity style={styles.exitButton} onPress={goBack}>
          <Ionicons name="arrow-back-sharp" size={25} />
        </TouchableOpacity>
        <Text style={styles.backText}>Mening mashinalarim</Text>
        <View></View>
      </View>

      <View style={styles.centerImageDiv}>
        <Image source={CarBackground} style={styles.carRentStyle} /> 
        <Text style={styles.imageText}>Sizda hali hech qanday mashina yo'q</Text>
      </View>

      <View style={styles.bottomDiv}>
        <TouchableOpacity style={styles.bottomButton} onPress={goNext}>
            <Text style={styles.buttonText}>Avtomobil qo'shish</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  backDiv:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  backText:{
    color:'#000',
    fontWeight:'700',
    fontSize:16,
  },
  exitButton:{

  },
  carRentStyle:{
    width:'100%',
    height:200,
    borderRadius:15,
  },
  centerImageDiv:{
    flexDirection:'column',
    marginVertical:100,
    gap:5,
  },
  imageText:{
    color:'#000',
    fontSize:20,
    fontWeight:'500',
    width:'100%',
  },
  bottomDiv:{
    marginTop:180,
  },
  bottomButton:{
    width:'100%',
    height:50,
    borderRadius:10,
    backgroundColor:'#0000ff',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:'#ffff',
    fontSize:16,
    fontWeight:'600',
  },
});

export default CarRegistration;

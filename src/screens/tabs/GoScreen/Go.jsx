import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
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
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";


const Go = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.goScreenContainer}>
      <Text style={styles.mainText}>Siz kim bo'lib sayohat yaratmoqchisiz:</Text>
      <View style={styles.selectedButtonBox}>
        <TouchableOpacity style={styles.selectButton}  onPress={() => navigation.navigate("traveldriver")}>
          <Ionicons name="car" size={30} style={styles.carIcon} />
          <Text style={styles.iconText}>Haydovchi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate("travelpassenger")}>
          <MaterialIcons name="people-alt" size={30} style={styles.carIcon} />
          <Text style={styles.iconText}>Yo'lovchi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Go;

const styles = StyleSheet.create({
  goScreenContainer: {
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    flex:1,
  },
  mainText:{
    textAlign:'center',
    width:175,
    color:'#a9a9a9',
    fontSize:18,
    fontWeight:'500',

  },
  selectedButtonBox:{
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
      gap:10,
  },
  selectButton:{
    flexDirection:'row',
    backgroundColor:'#87CEFA',
    width:'80%',
    height:50,
    padding:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  carIcon:{
    color:'#000fff',

  },
  iconText:{
    fontSize:16,
    fontWeight:'600',
    color:'#000fff',
    // paddingLeft:10,
  },
});

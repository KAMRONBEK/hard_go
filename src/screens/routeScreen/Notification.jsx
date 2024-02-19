import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,Image} from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";


// ----- Import Image  ----- // 
import HardCoIcon from '../../assets/images/stampGo.png'

const Notification = () => {
  const navigation = useNavigation();


  const goBack = () => {
    navigation.goBack();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  }

  return (
    <SafeAreaView style={styles.notificationScreen}>
      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.exitButton} onPress={goBack}>
          <Ionicons name="arrow-back-sharp" size={25} />
        </TouchableOpacity>
        <Text style={styles.notificationText}>Bildirishnomalar</Text>
        <Text> </Text>
      </View>
      {/*  Brend icon container */}
      <TouchableOpacity style={styles.hardgoIconContainer}>
          <Image  style={styles.brenImage} source={HardCoIcon}/>
        <View style={styles.goText}>
            <Text style={styles.hardText}>HardGo</Text>
            <Text style={styles.welcomText}>Xush kelibsiz</Text>
        </View>
        <View style={styles.dataCotainer}>
          <Text style={styles.dataText}>21.02.2024</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationScreen: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "500",
  },
  hardgoIconContainer:{
    flexDirection:'row',
    borderBottomColor:'#d3d3d3',
    borderBottomWidth:2,
    padding:10,
    gap:25,
  },
  brenImage:{
    width:55,
    height:55,
    objectFit:'cover',
  },
  goText:{
    flexDirection:'column',
    alignItems:'flex-start',
    gap:5,
  },
  hardText:{
    fontSize:17,
    fontWeight:'600',
  },
  welcomText:{
    fontSize:14,
    color:'#a3a3a3'
  },
  dataText:{
    color:'#808080',
  },
});
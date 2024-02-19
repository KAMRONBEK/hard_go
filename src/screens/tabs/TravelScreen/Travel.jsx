import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
// import * as React from "react";
import { useState } from "react";
// screens
import Driver from "../../Driver/Driver";
import Passenger from "../../Passenger/Passenger";


const Travel = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonPress = () => {
    setActiveButton(!activeButton);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Sayohatlar</Text>
      <View style={styles.listTab}>
        <TouchableOpacity
          style={[
            styles.btnTab,
            activeButton ? styles.btnTab : styles.activeButton,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Text style={styles.textTab}>Yo'lovchi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnTab,
            !activeButton ? styles.btnTab : styles.activeButton,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <Text style={styles.textTab}>Haydovchi</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {activeButton === true &&  <Text >{<Driver />}</Text>} */}
        {/* {!activeButton === true && <Text>{<Passenger />}</Text>} */}
        {activeButton === true ||  <View >{<Driver />}</View>}
        {!activeButton === true ||  <View >{<Passenger />}</View>}
      </View>
    </SafeAreaView>
  );
};

export default Travel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFF",
  },
  listTab: {
    padding: 7,
    backgroundColor: "#D3D3D3",
    borderRadius: 15,
    height: 60,
    marginTop: 15,
    flexDirection: "row",
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    width: "50%",
    height: 45,
    borderRadius: 15,
  },
  textTab: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#fff",
  },
});

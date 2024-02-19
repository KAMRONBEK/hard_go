import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Modal,
  Alert,
  Animated,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import React, { useState, useEffect, useRef } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
// import image
import BoxImagePhoto from "../../../assets/images/icon.png"; // icon image
import ExampleImage from "../../../assets/images/exampleImage.jpg";
// import progress bar
import * as Progress from "react-native-progress";
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
// import routine screens
import BusRoute from "../../carRoute/VehicleRoute";
import TaxiRoute from "../../carRoute/TaxiRoute";
// import navigation service
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const targetPercentage = 100; // Set the target percentage here
  const animationDuration = 5000; // Set the animation duration in milliseconds (3 seconds in this example)
  const frameDuration = 44; // Set the frame duration in milliseconds
  // active and inactive transport button
  const [activeButton, setActiveButton] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  const handleButtonPress = () => {
    setActiveButton(!activeButton);
  };

  const navigation = useNavigation()

  return (
    <View style={styles.containerStyle}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Hozirgi</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("notificationScreen")}
          hitSlop={{ left: 20, right: 20, bottom: 20, top: 20 }}
        >
          <MaterialCommunityIcons
            name="bell-ring"
            color={"#0000ff"}
            size={25}
          />
        </TouchableOpacity>
      </View>
      {/* carousel */}
      <View style={styles.scrollBody}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        >
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>
          <Pressable style={styles.sliderBox} onPress={toggleModal}>
            <Image style={styles.boxImage} source={BoxImagePhoto} />
          </Pressable>

          {/* Your horizontally scrollable content here */}
        </ScrollView>
        {/* Modal appear */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={toggleModal}
        >
          <View style={styles.modalBody}>
            <Progress.Bar
              progress={0.3}
              width={100}
              style={styles.progressStyle}
              color="#fff"
              unfilledColor="lightgray"
            />
            <View style={styles.modalContent}>
              <Image source={ExampleImage} style={styles.exampleImage} />
              <Text style={styles.modalContentText}>
                Bu yerda malumot bo'lishi mumkin edi
              </Text>
            </View>
          </View>
        </Modal>
      </View>
      <Text style={styles.centerText}>Transport turi</Text>
      <View style={styles.transportList}>
        <TouchableOpacity
          style={[
            styles.transportInActive,
            activeButton ? styles.transportActive : styles.transportInActive,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Ionicons
            name="car"
            size={35}
            style={[
              styles.iconInActive,
              activeButton ? styles.iconStyle : styles.iconInActive,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.transportInActive,
            !activeButton ? styles.transportActive : styles.transportInActive,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <FontAwesome5
            name="bus"
            size={23}
            style={[
              styles.busInActive,
              !activeButton ? styles.busActive : styles.busInActive,
            ]}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeButton === true || (
          <View style={styles.routineContainer}>{<BusRoute />}</View>
        )}
        {!activeButton === true || (
          <View style={styles.routineContainer}>{<TaxiRoute />}</View>
        )}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  sliderBox: {
    borderWidth: 2,
    borderRadius: 20,
    width: 80,
    height: 80,
    padding: 10,
    borderColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  boxImage: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  containerStyle: {
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollBody: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalBody: {
    // flex: 1,
    backgroundColor: "#d3d3d3",
    height: "100%",
    flexDirection: "column",
  },

  progressText: {
    fontSize: 18,
  },
  progressStyle: {
    width: "100%",
    borderRadius: 0,
    borderColor: "#d3d3d3",
    // backgroundColor:'#fff',
    marginTop: 3,
  },
  exampleImage: {
    width: 150,
    height: 150,
    objectFit: "cover",
    borderRadius: 50,
  },
  modalContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContentText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "700",
    color: "#ffff",
    width: 200,
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  transportList: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 15,
    height: 50,
    alignItems: "center",
  },
  transportInActive: {
    width: "50%",
    height: 40,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  transportActive: {
    backgroundColor: "#d1eaf0",
  },
  iconStyle: {
    color: "blue",
  },
  iconInActive: {
    color: "#d3d3d3",
  },
  busInActive: {
    color: "#d3d3d3",
  },
  busActive: {
    color: "blue",
  },
  routineContainer: {
    marginTop: 20,
    flex: 1,
    // width:'100%',
    height: 350,
    borderColor: "#000",
  },
});

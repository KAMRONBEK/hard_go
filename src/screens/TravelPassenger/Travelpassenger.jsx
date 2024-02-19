import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
// ----- import icons ----- //
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
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import SwitchButton from "../../components/SwitchButton";

const Travelpassenger = () => {
  const [openModal, setOpenModal] = useState(false); // open and close the modal
  const [openBookModal, setOpenBookModal] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("01/01/2024");
  // ----- Toggle Buttton ----- //
  const [onPressToggleButton, setPressToggleButton] = useState(false);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }
  const openBottomModal = () => {
    setOpenBookModal(!openBookModal);
  };
  const useModal = () => {
    setOpenModal(!openModal);
    setSelectedStartDate == "Bugun";
  };
  const useSelectedCalendar = () => {
    setOpenModal(!openModal);
  };
  const useClose = () => {
    setOpenBookModal(false);
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.exitButton} onPress={goBack}>
        <Ionicons name="arrow-back-sharp" size={25} />
      </TouchableOpacity>
      <Text style={styles.topText}>
        Ketish va kelishning aniq manzilini ko'rsating{" "}
      </Text>
      <View style={styles.chooseRouteDiv}>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate("routeDirection")}
        >
          <MaterialIcons name="location-on" style={styles.iconSearch} />
          <Text style={styles.inputSearch}>Qayerdan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate("routeDirection")}
        >
          <MaterialIcons name="location-on" style={styles.iconSearch} />
          <Text style={styles.inputSearch}>Qayerga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dataBox} onPress={useModal}>
          <Foundation name="calendar" style={styles.dataIcon} />
          <Text style={styles.calendarText}>
            {selectedStartDate ? selectedStartDate : "Sayohat sanasi"}
          </Text>
        </TouchableOpacity>
        <Pressable
          style={styles.countPerson}
          onPress={() => navigation.navigate("countPassenger")}
        >
          {/* person icon */}
          <View style={styles.leftCoundDiv}>
            <Ionicons style={styles.peopleIcon} name="people-sharp" />
            <Text style={styles.peopleCount}>Yo'lovchilar soni</Text>
          </View>
          <View>
            <Fontisto style={styles.downIcon} name="angle-down" />
          </View>
        </Pressable>
        <View style={styles.switchButtonDiv}>
          <Text style={styles.warningTaxiText}>
            Barcha haydovchilarga xabar berish
          </Text>
          {/* <SwitchButton /> */}
          <SwitchButton />
        </View>
        <View>
          <Text style={styles.taxiText}>
            Ushbu yo'nalishdagi barcha haydovchilarni xabardor qilish uchun
            ushbu xususiyatni yoqing.Bu haydovchilarni topish jarayonini
            tezlashtirishga yordam beradi
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.downButton}
        onPress={() => openBottomModal()}
      >
        <Text style={styles.buttonWhiteText}>Davom etish</Text>
      </TouchableOpacity>

      <Modal
        animationIn="slideInUp"
        transparent={true}
        isVisible={openModal}
        backdropOpacity={0.5}
        onBackdropPress={useModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChange={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
            />

            <View style={styles.bottomButtons}>
              <TouchableOpacity onPress={useModal}>
                <Text style={styles.closeButton}>Bekor qilish</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={useSelectedCalendar}>
                <Text style={styles.saveBButton}>Saqlash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationIn="slideInUp"
        transparent={true}
        isVisible={openBookModal}
        backdropOpacity={0.5}
        onBackdropPress={useClose}
      >
        <View style={styles.modalBody}>
          <View style={styles.topLine}>
            <View style={styles.grayLine}></View>
          </View>
          <View style={styles.myDiv}>
            <View style={styles.leftLocationBooking}>
              <MaterialIcons name="location-on" style={styles.iconSearch} />
              <Text style={styles.inputSearch}>Qayerdan:</Text>
            </View>
            <View style={styles.rightLocationBooking}>
              <Foundation name="target-two" style={styles.iconSearch} />
              <Text style={styles.inputSearch}>Navoiy</Text>
            </View>
          </View>
          <View style={styles.myDiv}>
            <View style={styles.leftLocationBooking}>
              <MaterialIcons name="location-on" style={styles.iconSearch} />
              <Text style={styles.inputSearch}>Qayerga:</Text>
            </View>
            <View style={styles.rightLocationBooking}>
              <MaterialCommunityIcons name="target-variant" style={styles.iconSearch} />
              <Text style={styles.inputSearch}>Buxoro</Text>
            </View>
          </View>
          <View style={styles.myDiv}>
            <View style={styles.leftLocationBooking}>
              <Foundation name="calendar" style={styles.dataIcon} />
              <Text style={styles.inputSearch}>  Sayohat sanasi:</Text>
            </View>
            <View style={styles.rightLocationBooking}>
              <MaterialCommunityIcons name="timetable" style={styles.iconSearch} />
              <Text style={styles.inputSearch}>2024-03-03</Text>
            </View>
          </View>
          <View style={styles.myDiv}>
            <View style={styles.leftLocationBooking}>
            <Ionicons style={styles.peopleIcon} name="people-sharp" />
              <Text style={styles.inputSearch}> Yo'lovchilar soni:</Text>
            </View>
            <View style={styles.rightLocationBooking}>
              <Text style={styles.inputSearch}>1</Text>
            </View>
          </View>
          <View style={styles.switchButtonDiv}>
          <Text style={styles.warningTaxiText}>
            Barcha haydovchilarga xabar berish
          </Text>
          {/* <SwitchButton /> */}
          <SwitchButton />
        </View>
        <View>
          <Text style={styles.taxiText}>
            Ushbu yo'nalishdagi barcha haydovchilarni xabardor qilish uchun
            ushbu xususiyatni yoqing.Bu haydovchilarni topish jarayonini
            tezlashtirishga yordam beradi
          </Text>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={useClose}>
          <Text style={styles.saveBUttonText}>Sayohatni yaratish</Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topText: {
    fontSize: 16,
    fontWeight: "600",
    width: 250,
    marginVertical: 15,
  },
  chooseRouteDiv: {
    flexDirection: "column",
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ffff",
    padding: 10,
  },
  inputRegionSearch: {
    width: "90%",
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginLeft: 30,
  },
  inputSearch: {
    width: "90%",
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  iconSearch: {
    width: "10%",
    color: "#0000ff",
    fontSize: 22,
  },

  dataBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ffff",
    padding: 10,
  },
  dataIcon: {
    color: "#0000ff",
    fontSize: 26,
    paddingLeft: 5,
  },
  calendarText: {
    paddingLeft: 10,
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ffff",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 380,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  closeButton: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  saveButton: {
    color: "#000fff",
    fontWeight: "700",
    fontSize: 16,
  },
  countPerson: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ffff",
    padding: 10,
    gap: 5,
  },

  peopleCount: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  peopleIcon: {
    color: "#0000ff",
    fontSize: 18,
  },
  leftCoundDiv: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  downIcon: {},
  switchButtonDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  warningTaxiText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  taxiText: {
    color: "#808080",
  },
  downButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0000ff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
  },
  buttonWhiteText: {
    color: "#fff",
    fontWeight: "500",
  },
  buttonDiv: {},
  modalBody: {
    width: "100%",
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#E8E6F1",
    position: "absolute",
    bottom: -10,
    paddingTop: 8,
    paddingHorizontal: 15,
    flexDirection: "column",
  },
  closeTextX: {
    color: "#000",
    fontSize: 22,
    alignItems: "flex-end",
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "center",
  },
  grayLine: {
    backgroundColor: "#808080",
    width: 30,
    height: 4,
    borderRadius: 5,
  },
  leftLocationBooking: {
    flexDirection: "row",
    alignItems: "center",
  },
  myDiv: {
    marginVertical: 10,
  },
  rightLocationBooking: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButton:{
    width:'100%',
    height:50,
    borderRadius:10,
    backgroundColor:'#0000ff',
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
  },
  saveBUttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'500',
  },
  saveBButton:{
    color:'#0000ff',
    fontSize:16,
    fontWeight:'700',
  },
});

export default Travelpassenger;

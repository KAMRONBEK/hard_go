import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity ,Modal} from "react-native";
import React,{useState} from "react";
// -----  import icons ------ // 
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome6,
  FontAwesome,
  Ionicons,
  Fontisto,
  FontAwesome5,
  Foundation,
} from "react-native-vector-icons";
// ----- import getPicker ---- //
import DatePicker from "react-native-modern-datepicker";
import { getToday,getFormatedDate } from "react-native-modern-datepicker";
// ---- Rotate button ---- // 
import RotatingButton from "../../components/RotateButton";
import { useNavigation } from "@react-navigation/native";

const TaxiRoute = () => {
  
  const [openModal, setOpenModal] = useState(false); // open and close the modal
  const today = new Date();
  const startDate =   getFormatedDate(today.setDate(today.getDate()+ 1 ),"YYYY/MM/DD");
  const [selectedStartDate,setSelectedStartDate] = useState("");
  const [startedDate,setStartedDate] = useState("01/01/2024");

  function handleChangeStartDate (propDate) {
    setStartedDate(propDate)
  };

  const useModal = () => {
    setOpenModal(!openModal);
  };
  const useSelectedCalendar = () => {
    setOpenModal(!openModal);
  };

  const navigation = useNavigation()

  return (
    <View style={styles.taxiContainer}>
      <View style={styles.flexSearch}>
        <TouchableOpacity style={styles.inputContainer} onPress={()=> navigation.navigate("routeDirection")}>
          <MaterialIcons name="location-on" style={styles.iconSearch} />
          <Text style={styles.inputSearch}>Qayerdan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputContainer} onPress={()=> navigation.navigate("routeDirection")}>
          <MaterialIcons name="location-on" style={styles.iconSearch} />
          <Text style={styles.inputSearch}>Qayerga</Text>
        </TouchableOpacity>
        <View>{/* circle icon button */}</View>
      </View>
      <View>
        <View style={styles.dataSearch}>
          <TouchableOpacity style={styles.dataBox} onPress={useModal}>
            <Foundation name="calendar"  style={styles.dataIcon}/>
            <Text  style={styles.calendarText}>
              {selectedStartDate ?  selectedStartDate : "Bugun"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.countPerson} onPress={()=> navigation.navigate("countPerson")}>
            {/* person icon */}
            <Ionicons style={styles.peopleIcon}  name="people-sharp"/>
            <Text style={styles.peopleCount}>10</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.togglePoint}  >
           <RotatingButton />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Izlash</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <DatePicker 
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChange={handleChangeStartDate}
              onSelectedChange={date => setSelectedStartDate(date)}
            
            />

            <View style={styles.bottomButtons}>
              <TouchableOpacity onPress={useModal}>
                <Text style={styles.closeButton}>Bekor qilish</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={useSelectedCalendar}>
                <Text style={styles.saveButton}>Saqlash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default TaxiRoute;

const styles = StyleSheet.create({
  taxiContainer: {
    flexDirection: "column",
    position:'relative',
    // gap:10,
  },
  searchButton: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    backgroundColor: "#0000ff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  searchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  inputSearch: {
    width: "90%",
    fontSize:16,
    color:'#000',
    fontWeight:'500',
  },
  iconSearch: {
    width: "10%",
    color: "#0000ff",
    fontSize: 22,
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
  flexSearch: {
    flexDirection: "column",
    gap: 10,
  },
  placeHolderStyle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  dataSearch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dataBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ffff",
    padding: 10,
  },
  countPerson: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    width: "22%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ffff",
    padding: 10,
    gap:5,
  },
  dataIcon:{
    color:'#0000ff',
    fontSize:26,
    paddingLeft:5,
  },
  calendarText:{
    paddingLeft:10,
    color:'#000',
    fontSize:16,
    fontWeight:'500',

  },
  peopleCount:{
    color:'#0000ff',
    fontSize:16,
    fontWeight:'600',
  },
  peopleIcon:{
    color:'#0000ff',
    fontSize:18,
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
  bottomButtons:{
    flexDirection:'row',
    alignItems:'center',
    gap:15,
  },
  closeButton:{
    fontSize:16,
    color:'#000',
    fontWeight:'500'
  },
  saveButton:{
    color:'#000fff',
    fontWeight:'700',
    fontSize:16,
  },
  togglePoint:{
    position:'absolute',
    top:-90,
    right:25,

  },
  toggleSwap:{
    fontSize:32,
    color:'#0000ff',
  },
});

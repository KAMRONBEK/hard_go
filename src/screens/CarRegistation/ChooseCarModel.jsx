import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React,{useState} from "react";
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
  Feather,
} from "react-native-vector-icons";
// ------ IMG ------ //
import CarAddFoto from "../../assets/images/addCarFotoHardGo.png";
import { useNavigation } from "@react-navigation/native";
import ModalPicker from "../../components/ModalPicker";
import ColorModalPicker from "../../components/ColorModalPicker";
import YearModalPicker from "../../components/YearModalPicker";

const ChooseCarModel = () => {

    const [chooseData,setChooseData] = useState('Kompaniyasi');  
    const [isCarModal,setIsCarModal] = useState(false);

    const [chooseColorData,setChooseColorData] = useState('Rangi');  
    const [isColorModal,setIsColorModal] = useState(false);

    const [chooseYearData,setChooseYearData] = useState('Yili');  
    const [isYearModal,setIsYearModal] = useState(false);
    
  
  const setData = (option) => {
    setChooseData(option)
 }
  const setColorData = (option) => {
    setChooseColorData(option)
 }
  const setYearData = (option) => {
    setChooseYearData(option)
 }
  const changeModalVisibility = (bool) => {
    setIsCarModal(bool)
  }
  const changeColorModalVisibility = (bool) => {
    setIsColorModal(bool)
  }
  const changeYearModalVisibility = (bool) => {
    setIsYearModal(bool)
  }

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backDiv}>
        <TouchableOpacity style={styles.exitButton} onPress={goBack}>
          <Ionicons name="arrow-back-sharp" size={25} />
        </TouchableOpacity>
        <Text style={styles.backText}>Shaklni to'ldiring</Text>
      </View>
      <View style={styles.addCarFotoBox}>
        <TouchableOpacity style={styles.carImageDiv}>
          <Image source={CarAddFoto} style={styles.addFotoStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addFotoTextDiv}>
          <Text style={styles.addBlueText}>Transport rasmini qo'shish +</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectModelDiv}>
        <View style={styles.mediumDiv}>
          <TouchableOpacity style={styles.selectionDivM} onPress={()=> changeModalVisibility(true)}>
            <Text>{chooseData}</Text>
            <Feather name="chevron-down" style={styles.iconDownStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectionDivM}>
            <Text>Model</Text>
            <Feather name="chevron-down" style={styles.iconDownStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.mediumDiv}>
          <TouchableOpacity style={styles.selectionDivM} onPress={()=> changeColorModalVisibility(true)}>
            <Text>{chooseColorData}</Text>
            <Feather name="chevron-down" style={styles.iconDownStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectionDivM} onPress={() => changeYearModalVisibility(true)}>
            <Text>{chooseYearData}</Text>
            <Feather name="chevron-down" style={styles.iconDownStyle} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.govermentNumber}>
        <Text style={styles.selectNumberText}>Davlat raqami:</Text>
        <View style={styles.numberInput}>
          <TextInput style={styles.inputSection} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.countPerson}
        onPress={() => navigation.navigate("countPassenger")}
      >
        {/* person icon */}
        <Text style={styles.peopleCount}>O'rindiqlar soni</Text>
        <Feather style={styles.iconDownStyle} name="chevron-down" />
      </TouchableOpacity>

      <View style={styles.bottomDivStyle}>
        <TouchableOpacity style={styles.saveButtonStyle}>
            <Text style={styles.saveTextStyle}>Saqlash</Text>
        </TouchableOpacity>
      </View>

        <Modal 
            transparent={true}
            animationType="fade"
            visible={isCarModal}
            nRequestClose={()=> changeModalVisibility(false)}
        >
            <ModalPicker 
            changeModalVisibility={changeModalVisibility}
            setData={setData}
            />
        </Modal>

        <Modal
        transparent={true}
        animationType="fade"
        visible={isColorModal}
        nRequestClose={() => changeColorModalVisibility(false)}
        >
          <ColorModalPicker 
            changeColorModalVisibility={changeColorModalVisibility}
            setColorData={setColorData}
          />  
        </Modal>

        <Modal
        transparent={true}
        animationType="fade"
        visible={isYearModal}
        nRequestClose={() => changeYearModalVisibility(false)}
        >
          <YearModalPicker 
            changeYearModalVisibility={changeYearModalVisibility}
            setYearData={setYearData}
          />  
        </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  backDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
    marginLeft: 75,
  },
  addCarFotoBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  addFotoStyle: {
    width: 120,
    height: 100,
    borderRadius: 10,
    objectFit: "contain",
    marginTop: 10,
  },
  addBlueText: {
    fontSize: 16,
    color: "#0000ff",
    fontWeight: "600",
  },
  selectModelDiv: {
    flexDirection: "column",
    gap: 10,
    marginVertical: 15,
  },
  mediumDiv: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectionDivM: {
    width: 160,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#ffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  govermentNumber: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  numberInput: {
    height: 50,
    backgroundColor: "#ffff",
    width: "68%",
    borderRadius: 10,
  },
  selectNumberText: {
    color: "#000",
    fontWeight: "600",
    marginLeft: 14,
  },
  inputSection: {
    width: "100%",
    height: "100%",
  },
  iconDownStyle: {
    fontSize: 16,
    color: "#000",
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
    marginVertical:10,
  },
  peopleCount: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  bottomDivStyle:{
    marginTop:15,
    width:'100%',
    borderRadius:10,
  },
  saveButtonStyle:{
    width:'100%',
    backgroundColor:'#0000ff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    height:50,
  },
  saveTextStyle:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
  },
 
});

export default ChooseCarModel;

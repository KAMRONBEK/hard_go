import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import {useLayoutEffect} from 'react';
import React, { useState,useCallback,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import RNPickerSelect from "react-native-picker-select";
// import { launchCamera, launchImageLibrary } from "
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
// ---- Images ---- //
import AddIMage from "../../assets/images/plusImage.png";
import CameraPick from '../../assets/images/myCameraSection.png';
import FilePick from '../../assets/images/selectFile.jpg';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const EditData = () => {
  const [image, setImage] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [placeholder, setPlaceholder] = useState("Select an option");
  // ---- delete modal ---- //
  const [delOpenModal, setDelOpenModal] = useState(false);
  // ---- date modal ---- //
  const [openModal, setOpenModal] = useState(false); // open and close the modal
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("01/01/2024");

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }
  // data modal function //
  const useModal = () => {
    setOpenModal(!openModal);
  };
  // delete modal //
  const handleModalDelete = () => {
    setDelOpenModal(!delOpenModal);
  };
  const useSelectedCalendar = () => {
    setOpenModal(!openModal);
  };

 
  const handlePressButton = () => {
    if (selectedValue === "male") {
      setPlaceholder("Erkak");
    } else if (selectedValue === "female") {
      setPlaceholder("Ayol");
    } else {
      setPlaceholder("Jinsni Tanlash");
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Erkak", "Ayol"];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handleSelectOption(item)}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  // ---- image picker ---- //
  const [openPicture, setOpenPicturel] = useState(false); // open and close the modal
  const [selectedImage, setSelectedImage] = useState(null);

  const openFotoLIbraryModal = () => {
    setOpenPicturel(!openPicture) 
  }
  const closePIckerModal = () => {
    setOpenPicturel(false);
  };

  // ---- IMAGE PICKER ---- //
  const [imgUrl,setImgUrl] = useState('');

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };
  const openCameraLab = async () => {
   const options = {
    storageOptions:{
      path:'images',
      mediaType:'photo',
    },
   };
   launchCamera(options, response => {
    console.log('Response = ' , response);
    if(response.didCancel) {
      console.log("User cancelled image picker")
    } else if(response.errorCode){
      console.log('Image picker ERROR: ' ,response.errorCode)
    } else {
      const source = {uri: 'data:image/jpeg;base64,' };
      setImgUrl(source) 
    }
   })

  }

  const openLibraryLab =  () => {
      let options = {
        storageOptions:{
          path:"image"
        },
      };
      launchImageLibrary(options, response => {
        setImgUrl(response.assets[0].uri)
        console.log(response.assets[0].uri)
      })
  }

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");

      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    if (hasGalleryPermission === false) {
      return <Text>No access storage</Text>;
    }
  };



  return (
    <View style={styles.editContainer}>
      <TouchableOpacity style={styles.exitButton} onPress={goBack}>
        <Ionicons name="arrow-back-sharp" size={25} />
      </TouchableOpacity>
      <View style={styles.editImageContainer}>
        <TouchableOpacity style={styles.changeImageContainer} onPress={openFotoLIbraryModal}>
          {/* <Image style={styles.editImage} source={{uri:imgUrl}} /> */}
          {image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.sourseImageStyle}
                  />
                )}
         
        </TouchableOpacity>
        <View>
          <Text style={styles.userName}>Ogabek Otaxonov</Text>
          <Text style={styles.userNumber}>+998 94 125 99 77</Text>
        </View>
      </View>
      <Text style={styles.privateDataText}>Shaxsiy Ma'lumotlar</Text>
      <View style={styles.inputBox}>
        <TextInput placeholder="Ogabek" style={styles.dataInput} />
        <TextInput placeholder="Otaxonov" style={styles.dataInput} />
        {/* data change button */}
        <TouchableOpacity style={styles.dataInput} onPress={useModal}>
          <Text style={styles.calendarText}>
            {selectedStartDate ? selectedStartDate : "1988.02.04"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressButton}></TouchableOpacity>

        <TouchableOpacity
          style={styles.dropdownTrigger}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={styles.triggerText}>
            {selectedOption || "Jinsni Tanlash"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteData} onPress={handleModalDelete}>
          <Text style={styles.deleteText}>Hisobni o'chirish</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButtonStyle}>
        <Text style={styles.saveButtonText}>Saqlash</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={openModal}>
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
                <Text style={styles.saveButton}>Saqlash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* delete modal */}
      <Modal animationType="slide" transparent={true} visible={delOpenModal}>
        <View style={styles.deleteModalBody}>
          <View style={styles.deleteModalTop}>
            <Text style={styles.deleteTopModalText}>O'chirish</Text>
            <Text style={styles.deleteWarningText}>
              Siz profilingizni o'chiryapsiz
            </Text>
          </View>
          <View style={styles.lineBorder}></View>
          <View style={styles.deleteConfirm}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleModalDelete}
            >
              <Text style={styles.noText}>Yo'q</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleModalDelete}
            >
              <Text style={styles.yesText}>Ha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={dropdownVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={renderOption}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Image PIcker MOdal  */}
      <Modal transparent={true} visible={openPicture} animationType="fade"  >
        <TouchableOpacity style={styles.fotoLibrary} >
          <TouchableOpacity  onPress={closePIckerModal}>
              <MaterialCommunityIcons name="close-box" style={styles.closeButtonPicker}/>
          </TouchableOpacity>
            <View style={styles.pickerButton}>
              <TouchableOpacity onPress={handleImagePicker}>
                  <Image source={CameraPick} style={styles.pressImage}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => pickImage()}>
                  <Image source={FilePick} style={styles.pressImage}/>
              </TouchableOpacity>
           
            </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default EditData;
  
const styles = StyleSheet.create({
  closeButtonPicker:{
    fontSize:40,
    color:'#0000ffff',
    flexDirection:'row',
    alignItems:'flex-end',
    position:'absolute',
    right:0,
  },
  pressImage:{
    width:100,
    height:100,
    borderRadius:50,
  },
  fotoLibrary:{
    width:'100%',
    height:250,
    backgroundColor:'#ffff',
    bottom:0,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    position:'absolute',
    padding:10,
    flexDirection:'column',
  },
  pickerButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:30,
    marginTop:30,
  },

  editContainer: {
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
  editImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  userNumber: {
    fontSize: 14,
    color: "#555555",
  },
  changeImageContainer: {
    width: 95,
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:3,
    borderColor:'#ffff',
    borderRadius:50,
  },
  editImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  privateDataText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
    marginVertical: 10,
  },
  dataInput: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#ffff",
    padding: 15,
  },
  inputBox: {
    flexDirection: "columnx",
    gap: 10,
  },
  // ---- Modal Styles ----- //
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
  dataSelectInput: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#ffff",
    padding: 15,
    color: "#000",
  },
  selectionStyle: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#ffff",
    padding: 15,
    color: "#000",
  },
  deleteData: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
  },
  deleteText: {
    color: "red",
    fontSize: 14,
  },
  saveButtonStyle: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0000ffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 240,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  deleteModalBody: {
    width: "90%",
    height: 140,
    borderRadius: 20,
    backgroundColor: "#ffff",
    marginHorizontal: 20,
    top: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteModalTop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  lineBorder: {
    height: 1,
    width: "100%",
    backgroundColor: "#a3a3a3",
  },
  deleteTopModalText: {
    fontSize: 15,
    fontWeight: "600",
  },
  deleteWarningText: {
    color: "#808080",
  },
  deleteConfirm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 15,
  },
  confirmButton: {
    width: 50,
    height: 30,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
  },
  // dropdown style //
  dropdownTrigger: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffff",
  },
  triggerText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    // height:550,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    Height: 500,
    marginTop: "auto",
  },
  optionItem: {
    padding: 20,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 25,
    fontWeight: "600",
    // marginBottom: 5,
  },
  noText: {
    color: "#0000ffff",
    fontWeight: "600",
  },
  yesText: {
    color: "red",
    fontWeight: "600",
  },
});

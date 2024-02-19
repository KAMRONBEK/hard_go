import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const Traveldriver = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.exitButton} onPress={goBack}>
        <Ionicons name="arrow-back-sharp" size={25} />
      </TouchableOpacity>
      <Text style={styles.topText}>
        Ketish va kelishning aniq manzilini ko'rsating{" "}
      </Text>
      <View style={styles.centerDiv}>
        <View style={styles.flexSearch}>
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
            {/* <MaterialIcons name="location-on" style={styles.iconSearch} /> */}
            <Text style={styles.inputRegionSearch}>Qayerga</Text>
          </TouchableOpacity>
          <View>{/* circle icon button */}</View>
        </View>
        <View style={styles.flexSearch}>
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
            {/* <MaterialIcons name="location-on" style={styles.iconSearch} /> */}
            <Text style={styles.inputRegionSearch}>Qayerga</Text>
          </TouchableOpacity>
          <View>{/* circle icon button */}</View>
        </View>
      </View>
      <View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Davom etish</Text>
      </TouchableOpacity>
      </View>
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
  centerDiv: {
    flexDirection: "column",
    gap: 50,
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
  iconSearch: {
    width: "10%",
    color: "#0000ff",
    fontSize: 28,
  },
  inputSearch: {
    width: "90%",
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  inputRegionSearch: {
    width: "90%",
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginLeft:30,
  },
  flexSearch: {
    flexDirection: "column",
    gap: 15,
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
});

export default Traveldriver;

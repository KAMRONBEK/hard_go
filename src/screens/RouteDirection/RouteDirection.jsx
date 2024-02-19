import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import SearchComponent from "../../components/SearchComponent";
// import icons
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome6,
  FontAwesome,
  Ionicons,
  Fontisto,
  FontAwesome5,
  Entypo,
} from "react-native-vector-icons";

const data = [
  { id: 1, title: "Toshkent shahri"},
  { id: 2, title: "Toshkent viloyat" },
  { id: 3, title: "Navoiy" },
  { id: 4, title: "Buxoro" },
  { id: 5, title: "Jizzax" },
  { id: 6, title: "Qashqadaryo" },
  { id: 7, title: "Namangan" },
  { id: 8, title: "Sirdaryo" },
  { id: 9, title: "Andijon" },
  { id: 10, title: "Samarqand" },
  { id: 11, title: "Surxondaryo" },
  { id: 12, title: "Qoraqalpog'iston Respublikasi" },
  // ... Add more data as needed
];

const RouteDirection = () => {
  return (
    <View style={styles.container}>
      <SearchComponent data={data} />
    </View>
  );
};

export default RouteDirection;

const styles = StyleSheet.create({
  container: {flex: 1 ,
    paddingTop:35,
},
  clockIcon: {},
  searchInput: {},
  searchIcon: {},
  routeContainer: {},
});

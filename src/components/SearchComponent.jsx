import { StyleSheet, Text, View, FlatList, TextInput  } from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import { ScrollView } from 'react-native-virtualized-view'
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
  Feather,
} from "react-native-vector-icons";

const SearchComponent = ({ data }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.rowInput}>
        <Feather  name="search" style={styles.searchIcon}/>
        <TextInput
          style={styles.searchInput}
          placeholder="Izlash..."
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Card title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    gap:5,
    paddingBottom:0,
  },
  searchInput: {
    fontSize:16,
  },
  rowInput:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    padding:10,
    backgroundColor: "#FFFFFF",
    height:50,
    borderRadius:10,
  },
  searchIcon:{
    fontSize:20,
    fontWeight:'500',
    color:'#a9a9a9'
  },
  scrollView:{
    flex:1,
  },
});

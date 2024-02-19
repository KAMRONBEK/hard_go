import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
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
} from "react-native-vector-icons";
// ------ NAVIGATION SERVICE ----- //


// ------ IMAGES ----- //
import UserImage from "../../../assets/images/userMobileIMage.png";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const handleLinkPress = () => {
    const url = 'https://www.youtube.com'; // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open link:', err));
  };
  const handleTelegramLinkPress = () => {
    const username = '@https://t.me/Assassin_0221'; // Replace with the Telegram username you want to link to
    const url = `tg://user?695898987=${username}`;
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open Telegram user link:', err));
  };
const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <View style={styles.mainProfile}>
        <Image style={styles.userGrayImage} source={UserImage} />
        <View style={styles.userDataBox}>
          <Text style={styles.userName}>Ogabek Otaxonov</Text>
          <Text style={styles.userNumber}>+998 94 125 99 77</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileEdit}  onPress={() => navigation.navigate("editUserData")}>
        <MaterialCommunityIcons
          style={styles.pencilStyle}
          name="pencil-outline"
        />
        <Text>Ma'lumotlarni tahrirlash</Text>
      </TouchableOpacity>
      <View style={styles.profileLinks}>
        <TouchableOpacity style={styles.linkListContainers} onPress={() => navigation.navigate("registercar")}>
          <Ionicons style={styles.pencilStyle} name="car" />
          <Text>Mening avtomobilim </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <MaterialCommunityIcons
            style={styles.pencilStyle}
            name="check-decagram"
          />
          <Text onPress={handleLinkPress}>Mening hujjatlarim </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers} onPress={() => navigation.navigate("notificationScreen")}>
          <MaterialCommunityIcons name="bell-ring" style={styles.pencilStyle} />
          <Text>Bildirishnomalar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <Foundation style={styles.pencilStyle} name="comment-quotes" />
          <Text>Sharhlar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <MaterialIcons style={styles.pencilStyle} name="language" />
          <Text>Tilni o'zgartirish </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <MaterialIcons style={styles.pencilStyle} name="live-help" />
          <Text onPress={handleTelegramLinkPress}>Yordam </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <MaterialIcons style={styles.pencilStyle} name="support-agent" />
          <Text onPress={handleLinkPress}>Qo'llab-quvvatlash </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <FontAwesome5 style={styles.pencilStyle} name="file-contract" />
          <Text onPress={handleLinkPress}>Foydalanuvchi shartnomasi </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <MaterialIcons style={styles.pencilStyle} name="public" />
          <Text onPress={handleLinkPress}>Ommaviy taklif </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkListContainers}>
          <FontAwesome5 style={styles.pencilStyle} name="hands-helping" />
          <Text onPress={handleLinkPress}>Yaxshilanish uchun takliflar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastLinkListContainers}>
          <MaterialIcons style={styles.pencilStyle} name="logout" />
          <Text>Chiqish </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "column",
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
  mainProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  profileEdit: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#ffff",
    paddingHorizontal: 15,
    marginVertical: 15,
    gap: 10,
  },
  profileLinks: {
    flexDirection: "column",
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginTop: 10,
    marginBottom: 25,
  },
  // user container styles //
  userGrayImage: {
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: 50,
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
  // edit section style //
  pencilStyle: {
    color: "#0000ffff",
    fontSize: 25,
  },
  // link list section style //
  linkListContainers: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#a3a3a3",
    borderBottomWidth: 1,
    height: 50,
    gap: 10,
    borderRadius: 10,
  },
  lastLinkListContainers: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    gap: 10,
    borderRadius: 10,
  },
});

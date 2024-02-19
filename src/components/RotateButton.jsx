import React, { useRef, useState } from "react";
import { TouchableOpacity, Animated, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RotatingButton = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;
  const [isRotated, setIsRotated] = useState(false);

  const rotateButton = () => {
    const toValue = isRotated ? 0 : 0.5; // Toggle rotation value between 0 and 0.5

    Animated.timing(rotationValue, {
      toValue: toValue,
      duration: 450,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsRotated(!isRotated); // Toggle the state
    });
  };

  const buttonRotationStyle = {
    transform: [
      {
        rotate: rotationValue.interpolate({
          inputRange: [0, 0.5],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity onPress={rotateButton}>
      <Animated.View style={[styles.button, buttonRotationStyle]}>
        <MaterialCommunityIcons name="swap-vertical" size={32} color="#14145c" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#14145c",
  },
};

export default RotatingButton;
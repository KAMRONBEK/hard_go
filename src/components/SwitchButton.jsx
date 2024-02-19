import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
   
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={[styles.switchContainer, isEnabled && styles.switchEnabled]}
    >
      <View style={[styles.switchButton, isEnabled && styles.switchButtonEnabled]}>
        <View style={[styles.switchIndicator, isEnabled && styles.switchIndicatorEnabled]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 60,
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 2,
  },
  switchEnabled: {
    backgroundColor: '#0000ff',
  },
  switchButton: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align the indicator to the left
    paddingLeft: 2, // Add some padding to the left
  },
  switchButtonEnabled: {
    alignItems: 'flex-end', // Move the indicator to the right
    paddingRight: 2, 
    backgroundColor:'#0000ff',
    
  },
  switchIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ccc',
  },
  switchIndicatorEnabled: {
    backgroundColor: '#fff',
    
  },
});

export default SwitchButton;
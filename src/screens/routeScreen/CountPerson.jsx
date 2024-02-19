import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState}from 'react'
// import navigation service
import { useNavigation } from '@react-navigation/native';

const CountPerson = () => {
  const navigation = useNavigation()
  const [activeButton, setActiveButton] = useState(null);

  const goBack = () => {
    navigation.goBack();
  };

  const handleButtonPress = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <SafeAreaView style={styles.countPerson} >
      <Text style={styles.mainText}>O'rindiqlar sonini tanlang:</Text>
      {/* carousel section */}
      <View>
        <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        >
        
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((buttonId) => (
        <TouchableOpacity
          key={buttonId}
          style={[
            styles.button,
            {
              backgroundColor: activeButton === buttonId ? '#87CEFA' : 'white',
            },
          ]}
          onPress={() => handleButtonPress(buttonId)}
        >
          <Text style={styles.buttonIdText}>{buttonId}</Text>
        </TouchableOpacity>
      ))}

          {/* Your horizontally scrollable content here */}
        </ScrollView>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={goBack}>
          <Text style={styles.buttonTextStyle}>Davom etish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CountPerson

const styles = StyleSheet.create({
  countPerson:{
    flex:1,
    flexDirection:'column',
    paddingTop:45,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    gap:15,
  },
  mainText:{
    fontSize:18,
    fontWeight:'600',
  },
  button: {
    width: 60,
    height: 50,
    margin: 5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:'#a9a9a9',
    borderWidth:1,
  },
  buttonIdText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'600',
  },
  nextButton:{
    width:'100%',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000fff',
  },
  buttonTextStyle:{
    fontSize:14,
    color:'#ffff',
    fontWeight:'500',
  },
})
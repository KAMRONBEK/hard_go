import React from 'react';
import {View, StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native';

const OPTIONS = ['Chevrolet','KIA','Mazda','Hyundai','BYD','Chery','Toyota','MresedesBens','BMW','Lada','Audi','Ravon','Acura','Alfa Romeo','Aston Martin','Bentley','Buick','Cadillac','Changan','Chrysler','Citroen','Dacia','Daihatsu','Dodge','Fiat','Ford','Genesis','GMC','Haval','Honda','Infiniti','Isuzu','Jaguar','Jeep','Rage Rover','Lexus','Lincoln','Mazda','Mini','Mitsubishi','Nissan','Opel','Peugeot','Renault','Skoda','Ssang Yong','Subaru','Suzuki','Tesla','Volvo','AITO','BAIC','BAW','Jetour','Forthing','ZAZ','Gac']


const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false)
        props.setData(option)
    }

    const options = OPTIONS.map((item,index) => {
        return (
            <TouchableOpacity
                style={styles.optionStyle}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
    <TouchableOpacity  
        onPress={() => props.changeModalVisibility(false)}
        style={styles.container}
    >
        <View style={[styles.modal,{width:160,height:650,marginLeft:-170,}]}>
            <ScrollView>
                {options}
            </ScrollView>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        backgroundColor:'#fff',
        borderRadius:10,
    },
    optionStyle:{
        alignItems:'flex-start',

    },
    text:{
        margin:10,
        fontSize:14,
        fontWeight:'500',
    },
})

export default ModalPicker;

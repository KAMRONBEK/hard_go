import React from 'react';
import {View, StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native';

const COLORS = ['Qizil','Moviy','Oq','Aqua','Qora','Shokolad','Kulrang','Yashil','Apelsin','Pushti','Sariq','Binafsha','Jigarrang']

const ColorModalPicker = (props) => {

    const onPressColorItem = (option) => {
        props.changeColorModalVisibility(false)
        props.setColorData(option)

    }

    const optionColors = COLORS.map((item,index) => {
        return (
            <TouchableOpacity
                style={styles.optionStyle}
                key={index}
                onPress={() => onPressColorItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
        onPress={() => props.changeColorModalVisibility(false)}
        style={styles.container}
        >
          <View style={[styles.modal,{width:160,height:400,marginLeft:-170,}]}>
            <ScrollView>
                {optionColors}
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

export default ColorModalPicker;

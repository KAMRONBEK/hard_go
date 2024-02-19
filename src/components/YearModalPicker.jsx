import React from 'react';
import {View, StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native';


const YEARS = [ 
    '1974',
    '1975',
    '1976',
    '1977',
    '1978',
    '1979',
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',

]

const YearModalPicker = (props) => {
    
    const onPressYearItem = (option) => {
        props.changeYearModalVisibility(false)
        props.setYearData(option)

    }
    const optionYears = YEARS.map((item,index) => {
        return (
            <TouchableOpacity
                style={styles.optionStyle}
                key={index}
                onPress={() => onPressYearItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
        onPress={() => props.changeYearModalVisibility(false)}
        style={styles.container}
        >
          <View style={[styles.modal,{width:160,height:650,marginRight:-170,}]}>
            <ScrollView>
                {optionYears}
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

export default YearModalPicker;

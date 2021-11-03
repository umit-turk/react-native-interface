import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { SIZES } from '../constants/theme';

const sehirler = [
  'Ankara',
  'Adana',
  'İstanbul',
  'Bursa',
  'Yozgat',
  'Niğde',
  'Trabzon',
  'Karabük',
  'Rize',
  'Malatya',
  'Diyarbakır',
];

const ModalPicker = ({changeModalVisiblity, setData}) => {

    const onPressItem = (option) => {
        changeModalVisiblity(false)
        setData(option)
    }

    const option = sehirler.map((item, index) => {
        return (
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>

            </TouchableOpacity>
        )
    })

  return <TouchableOpacity
  onPress={() => changeModalVisiblity(false)}
  style={styles.container}
  >
      <View style={[styles.modal, {width:SIZES.width -20, height:SIZES.height / 2}]}>
        <ScrollView>
            {option}
        </ScrollView>
      </View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    modal:{
        backgroundColor:"white",
        borderRadius:10,
    },
    option:{
        alignItems:"flex-start"
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:"bold"
    }
})

export default ModalPicker;

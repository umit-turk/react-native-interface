import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, ImageBackground, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';
import HeaderSearch from '../components/HeaderSearch';
import {MapPin} from '../Icons';
import Kisiler from '../components/Kisiler';
import ModalPicker from '../components/ModalPicker';

const AramaSayfası = () => {
  const navigtion = useNavigation();

  const changeModalVisiblity = (bool) => {
    setVisible(bool)
} 

const [visible, setVisible] = useState(false)
const [chooseData, setChooseData] = useState("Select Item...")

const setData = (option) => {
  setChooseData(option)
}

  return (
    <View  style={styles.container}>
 
      <HeaderSearch />
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Kişiler */}
          <Text
            style={{
              marginLeft: 20,
              marginTop: 15,
              lineHeight: 25.5,
              fontSize: 17,
              color: COLORS.lightblack,
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
            }}>
            Kişiler (3)
          </Text>
          {/* Lokasyon */}
          <TouchableOpacity
          onPress={() => changeModalVisiblity(true)}
            style={{
              flexDirection: 'row',
              marginRight: 20,
              marginTop: 7,
              width: 111,
              height: 34,
              backgroundColor: COLORS.green,
              borderRadius: 17,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* icon */}
            <View style={{paddingLeft: 10}}>
              <MapPin />
            </View>
            {/* Şehir */}
            <Text
              style={{
                paddingRight: 16,
                fontFamily: 'Poppins-Medium',
                lineHeight: 21,
                fontSize: 14,
                color: COLORS.white,
              }}>
              {chooseData}
            </Text>
          </TouchableOpacity>
          <Modal
           transparent={true}
           animationType="fade"
           visible={visible}
           nRequestClose={() => changeModalVisiblity(false)}
           >
         

          

             <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          backgroundColor: 'rgba(19, 20, 65, 0,2)',
          padding: 20,
        }}
      >
       
      

         <ModalPicker 
             changeModalVisiblity={changeModalVisiblity}
             setData={setData}
             />
      </View>


           </Modal>
           

        </View>
        {/* Kişiler komponenti */}
       <Kisiler />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});


export default AramaSayfası;

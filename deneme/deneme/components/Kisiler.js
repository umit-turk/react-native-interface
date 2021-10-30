import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS} from '../constants/theme';

const Kisiler = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: COLORS.white,
        height: 204,
        marginTop: 15,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        {/* Fotoğraf */}
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
          }}>
          <Image source={require('../constants/images/kız.png')} />
        </View>
        <View>
          {/* İsim */}
          <Text
            style={{
              paddingTop: 15,
              lineHeight: 25.5,
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              fontWeight: '500',
              color: COLORS.lightblack,
            }}>
            Ayşegül Oğuz
          </Text>
          {/* Adres */}
          <Text
            style={{
              lineHeight: 21,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Medium',
              color:COLORS.lighgray
            }}>
            Şişli, İstanbul, Türkiye
          </Text>
        </View>
      </View>
      {/* bölme */}
      <View style={{flexDirection: 'row'}}>
        {/* Fotoğraf */}
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
          }}>
          <Image source={require('../constants/images/kız.png')} />
        </View>
        <View>
          {/* İsim */}
          <Text
            style={{
              paddingTop: 15,
              lineHeight: 25.5,
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              fontWeight: '500',
              color: COLORS.lightblack,
            }}>
            Ayşegül Oğuz
          </Text>
          {/* Adres */}
          <Text
            style={{
              lineHeight: 21,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Medium',
              color:COLORS.lighgray
            }}>
            Şişli, İstanbul, Türkiye
          </Text>
        </View>
      </View>
      {/* bölme */}
      <View style={{flexDirection: 'row'}}>
        {/* Fotoğraf */}
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
          }}>
          <Image source={require('../constants/images/kız.png')} />
        </View>
        <View>
          {/* İsim */}
          <Text
            style={{
              paddingTop: 15,
              lineHeight: 25.5,
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
              fontWeight: '500',
              color: COLORS.lightblack,
            }}>
            Ayşegül Oğuz
          </Text>
          {/* Adres */}
          <Text
            style={{
              lineHeight: 21,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Medium',
              color:COLORS.lighgray
            }}>
            Şişli, İstanbul, Türkiye
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Kisiler;

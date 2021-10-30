import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';
import HeaderSearch from '../components/HeaderSearch';
import {MapPin} from '../Icons';
import Kisiler from '../components/Kisiler';

const AramaSayfası = () => {
  const navigtion = useNavigation();

  return (
    <View style={{flex: 1}}>
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
          <View
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
              İstanbul
            </Text>
          </View>
        </View>
        {/* Kişiler komponenti */}
       <Kisiler />
      </ScrollView>
    </View>
  );
};

export default AramaSayfası;

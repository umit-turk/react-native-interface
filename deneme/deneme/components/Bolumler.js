import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import {ArrowRightCircle} from '../Icons';

const Bolumler = ({color, backgroundColor, Baslık, Aciklama}) => {

    
  return (
    <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}}>
      {/* İcon */}
      <View
        style={{
          width: 48,
          height: 48,
          marginLeft: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
          borderRadius:SIZES.radius
        }}>
        <ArrowRightCircle color={color} />
      </View>

      {/* Başlık ve açıklama */}
      <View style={{justifyContent:"space-between",marginLeft:15}}>
        <Text style={{lineHeight:25.5,fontSize:17,color:COLORS.lightblack}}>{Baslık}</Text>
        <Text style={{lineHeight:21,fontSize:14,color:COLORS.lighgray}}>{Aciklama}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bolumler;

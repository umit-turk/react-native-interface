import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';

export default function TextButton({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
    style={{
        height: 55,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.white,
        ...customContainerStyle
    }}
    onPress={onPress}
    >
        <Text style={{
            ...FONTS.h3, ...customLabelStyle
        }}>{label}</Text>

    </TouchableOpacity>
  );
}

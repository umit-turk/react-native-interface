import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS,FONTS } from '../constants'

export default function CustomButton({buttonText, buttonContainerStyle, colors, onPress}) {
    if(colors.length > 0){
        return (
            <TouchableOpacity
            onPress={onPress}
            >
                <LinearGradient
                start={{x: 0, y:0}}
                end={{x: 0, y:1}}
                colors={colors}
                style={{
                    ...buttonContainerStyle
                }}
                >
                <Text
                style={{
                    textAlign:"center",
                    color:COLORS.white,
                    ...FONTS.h3
                }}
                >{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }else{
        return (
            <TouchableOpacity
            onPress={onPress}
            >
                <Text
                style={{
                    textAlign:"center",
                    color:COLORS.lightGreen,
                    ...FONTS.h3,
                    ...buttonContainerStyle
                }}
                >{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

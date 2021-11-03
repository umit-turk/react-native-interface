import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import VirtualKeyboard from 'react-native-virtual-keyboard';

const Gruplar = () => {

    const [text,setText] = useState('')

    return (
        <View style={{flex:1,justifyContent:"center"}}>
            <View style={{marginLeft:20,marginRight:20,marginRight:20}}>
            <TextInput style={{height:54}} placeholder="321312312312312">{text}</TextInput>
            </View>
            <VirtualKeyboard  style={{fontSize:40}} color="#0C2562" backspaceImg={require('../constants/images/close.png')} pressMode="string" onPress={(val) => setText(val)} />
        </View>
    )
}

export default Gruplar

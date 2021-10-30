import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import {Cancel, ChevronLeft, InputSearch, SearchUser} from '../Icons';

const HeaderSearch = () => {
    const textInput = useRef(null);
    const [text, setText] = useState('')
    
  const navigation = useNavigation();

  function geri() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{height: 124, backgroundColor: COLORS.blue}}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={geri}
          style={{justifyContent: 'center', paddingLeft: 19, paddingRight: 21}}>
          <ChevronLeft />
        </TouchableOpacity>
        {/* SearchInput */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: 50,
            borderRadius: 12,
            marginRight: 20,
            flex: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}>
            <InputSearch />
          </View>
          <TextInput
          
            style={{
              flex: 1,
              fontSize: 15,
              paddingTop: 0,
              paddingBottom: 0,
              alignItems: 'center',
              color:COLORS.lightblack,
            }}
            autoFocus={true}
            value={text}
            onChangeText={setText}
            placeholder="Genel Arama Alanı"
            placeholderTextColor={COLORS.lighgray}
          />
          <View
            style={{
              justifyContent: 'center',
              paddingRight: 15,
            }}>
            <Cancel />
          </View>
        </View>
        {/* User Logo */}
      </View>
    </SafeAreaView>
  );
};

export default HeaderSearch;

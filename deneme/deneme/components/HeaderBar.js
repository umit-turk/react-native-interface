import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import {SearchUser, InputSearch} from '../Icons';

const HeaderBar = () => {
  const navigation = useNavigation();

  function git() {
    navigation.navigate('AramaSayfası');
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
        {/* SearchInput */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: 50,
            marginLeft: 20,
            borderRadius: 12,
            marginRight: 15,
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
            }}
            onTouchStart={() => git()}
            editable={false}
            placeholder="Genel Arama Alanı"
            placeholderTextColor={COLORS.lighgray}
          />
        </View>
        {/* User Logo */}
        <TouchableOpacity
          style={{
            marginRight: 20,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.blurwhite,
            borderRadius: SIZES.radius,
          }}>
          <SearchUser />
          {/* sağ üstteki küçük zımbırtı */}
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              width: 16,
              height: 16,
              borderRadius: 15 / 2,
              right: -5,
              top: -5,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}>
            <Text
              style={{
                color: COLORS.white,
                backgroundColor: COLORS.red,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              1
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;

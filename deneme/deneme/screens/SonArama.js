import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Bolumler from '../components/Bolumler';
import HeaderBar from '../components/HeaderBar';
import {COLORS} from '../constants/theme';

const Home = () => {
  
  return (
    <View style={{flex: 1, backgroundColor:COLORS.white}}>
      <HeaderBar />
      <ScrollView>
      {/* Reklam Alanı */}
      <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 15}}>
        <Image
          style={{width: '100%'}}
          resizeMode="cover"
          source={require('../constants/images/reklam.png')}
        />
      </View>

      <Bolumler
        Aciklama="Endüstriyel Üretim, Makinacılar..."
        Baslık="Sanayi"
        backgroundColor={COLORS.lightgreen}
        color={COLORS.green}
      />
      <Bolumler
        backgroundColor={COLORS.lightblue}
        Baslık="Tarım Malzeme ve Makina"
        Aciklama="Ekim, Dikim Malzemeciler, Tarım..."
        color={COLORS.blue2}
      />
      <Bolumler
        backgroundColor={COLORS.lightpurple}
        Baslık="İş Yerleri ve Sektörler"
        Aciklama="Market Pataneler, Restorant, Cafe..."
        color={COLORS.darkpurple}
      />
      <Bolumler
        backgroundColor={COLORS.sun}
        Baslık="Kurumlar, Kurslar ve Sağlık"
        Aciklama="Okullar, Hastaneler, Kurs ve Eğitim..."
        color={COLORS.yellow}
      />
      <Bolumler
        backgroundColor={COLORS.lightred}
        Baslık="Turistik Tesisler"
        Aciklama="Oteller, Butik ve Apart Oteller, Motel..."
        color={COLORS.red2}
      />
      <Bolumler
        backgroundColor={COLORS.lightgreen2}
        Baslık="Projeler"
        Aciklama="Konut Projeleri, İş Yeri, AVM Proje..."
        color={COLORS.green2}
      />
      <Bolumler
        backgroundColor={COLORS.lightblue}
        Baslık="Tarım Malzeme ve Makina"
        Aciklama="Ekim, Dikim Malzemeciler, Tarım..."
        color={COLORS.blue2}
      />
      </ScrollView>
    </View>
  );
};

export default Home;

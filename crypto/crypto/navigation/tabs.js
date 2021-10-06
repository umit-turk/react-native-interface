import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';
import {COLORS, FONTS, icons} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabbarCustomButton = ({children, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            top:-30,
            justifyContent:"center",
            alignItems:"center",
            ...styles.shadow
        }}
        onPress={onPress}
        >
            <LinearGradient
            colors={[COLORS.primary, COLORS.secondary]}
            style={{
                width:70,
                height:70,
                borderRadius:35,
            }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
                source={icons.home}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
                source={icons.pie_chart}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                PORTFOLIO
              </Text>
            </View>
          ),
        }}
        name="Portfolio"
        component={Home}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
            tabBarIcon: ({focused}) => (
                <Image 
                source={icons.transaction}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor:COLORS.white
                }}
                />
            ),
            tabBarButton:(props) => (
                <TabbarCustomButton {...props} />
            )
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
                source={icons.line_graph}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                PRICES
              </Text>
            </View>
          ),
        }}
        name="Prices"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
                source={icons.settings}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
        name="Settings"
        component={Home}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;

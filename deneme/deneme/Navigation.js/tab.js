import React from 'react';
import {SearchIcon, CheckIcon, User, Category, ArrowUpCircle} from '../Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SonArama from '../screens/SonArama';
import Detail from '../screens/Detail';
import {moderateScale, ScaledSheet, scale} from 'react-native-size-matters';
import Gruplar from '../screens/Groups';
import Takipler from '../screens/Detail';
import {COLORS} from '../constants/theme';
import AramaSayfası from '../screens/AramaSayfası';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, lineHeight: 18, paddingTop: 5},
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          height: 85,
          paddingTop: 15,
          paddingRight: 20,
          borderTopColor: 'white',
          shadowColor: 'rgba(0, 0, 0, 0.05)',
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 1,
          shadowRadius: 44,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarInactiveTintColor: COLORS.lighgray,
          tabBarIcon: ({focused}) => (
            <User
              tintColor={focused ? COLORS.green : COLORS.lighgray}
              styles={{
                backgroundColor: focused ? COLORS.lightgreen3 : '',
              }}
            />
          ),
        }}
        name="Gruplar"
        component={Gruplar}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          title: 'Son Arama',
          tabBarIcon: ({focused}) => (
            <SearchIcon
              tintColor={focused ? COLORS.green : COLORS.lighgray}
              styles={{
                backgroundColor: focused ? COLORS.lightgreen3 : '',
              }}
            />
          ),
        }}
        name="SonArama"
        component={SonArama}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarIcon: ({focused}) => (
            <Category
              tintColor={focused ? COLORS.green : COLORS.lighgray}
              styles={{
                backgroundColor: focused ? COLORS.lightgreen3 : '',
              }}
            />
          ),
        }}
        name="Takipler"
        component={Takipler}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarIcon: ({focused}) => (
            <ArrowUpCircle
              tintColor={focused ? COLORS.green : COLORS.lighgray}
              styles={{
                backgroundColor: focused ? COLORS.lightgreen3 : '',
              }}
            />
          ),
        }}
        name="Öne Çıkanlar"
        component={Detail}
      />
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Anasayfa" component={TabBar} />
      <Stack.Screen name="AramaSayfası" component={AramaSayfası} />
    </Stack.Navigator>
  );
}
export default RootNavigation;

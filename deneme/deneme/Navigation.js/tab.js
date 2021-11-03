import React from 'react';
import {SearchIcon, CheckIcon, User, Category, ArrowUpCircle} from '../Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SonArama from '../screens/SonArama';
import Detail from '../screens/Detail';
import {moderateScale, ScaledSheet, scale} from 'react-native-size-matters';
import Gruplar from '../screens/Groups';
import {COLORS, SIZES} from '../constants/theme';
import Takipler from '../screens/Takipler';
import AramaSayfası from '../screens/AramaSayfası';
import OneCikanlar from '../screens/OneCikanlar';
import {Platform, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function profilbar(){
//   return (
//     <Tab.Navigator
//     // screenOptions={{
//     //   tabBarLabelStyle: {fontSize: 12, lineHeight: 18, paddingTop: 5},
//     //   tabBarStyle: {
//     //     position: 'absolute',
//     //     left: 0,
//     //     right: 0,
//     //     height:85,
//     //     paddingTop: 15,
//     //     paddingRight: 20,
//     //     borderTopColor: 'white',
//     //     shadowColor: 'rgba(0, 0, 0, 0.05)',
//     //     shadowOffset: {
//     //       width: 0,
//     //       height: -12,
//     //     },
//     //     shadowOpacity: 1,
//     //     shadowRadius: 44,
//     //   },
//     //   headerShown: false,
//     // }}
//     >
//  {/* <Tab.Screen
//         options={{
//           tabBarActiveTintColor: COLORS.green,
//           tabBarIcon: ({focused}) => (
//             <ArrowUpCircle
//               tintColor={focused ? COLORS.green : COLORS.lighgray}
//               styles={{
//                 backgroundColor: focused ? COLORS.lightgreen3 : '',
//               }}
//             />
//           ),
//         }}
//         name="Öne Çıkanlar"
//         component={OneCikanlar}
//       /> */}
//     </Tab.Navigator>
//   )
// }

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 66,
          borderTopColor: 'white',
          shadowColor: 'rgba(0, 0, 0, 0.05)',
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 1,
          shadowRadius: 44,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarInactiveTintColor: COLORS.lighgray,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <User
                tintColor={focused ? COLORS.green : COLORS.lighgray}
                styles={{
                  backgroundColor: focused ? COLORS.lightgreen3 : '',
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.green : COLORS.lighgray,
                  paddingTop: 5,
                  paddingBottom: Platform.OS === "ios" ? 0 : 10,
                  fontSize:SIZES.width * 0.04
                }}>
                Gruplar
              </Text>
            </View>
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
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <SearchIcon
                tintColor={focused ? COLORS.green : COLORS.lighgray}
                styles={{
                  backgroundColor: focused ? COLORS.lightgreen3 : '',
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.green : COLORS.lighgray,
                  paddingTop: 5,
                }}>
                Son Arama
              </Text>
            </View>
          ),
        }}
        name="SonArama"
        component={SonArama}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Category
                tintColor={focused ? COLORS.green : COLORS.lighgray}
                styles={{
                  backgroundColor: focused ? COLORS.lightgreen3 : '',
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.green : COLORS.lighgray,
                  paddingTop: 5,
                }}>
                Takipler
              </Text>
            </View>
          ),
        }}
        name="Takipler"
        component={Takipler}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.green,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <ArrowUpCircle
                tintColor={focused ? COLORS.green : COLORS.lighgray}
                styles={{
                  backgroundColor: focused ? COLORS.lightgreen3 : '',
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.green : COLORS.lighgray,
                  paddingTop: 5,
                }}>
                Öne Çıkanlar
              </Text>
            </View>
          ),
        }}
        name="Öne Çıkanlar"
        component={OneCikanlar}
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

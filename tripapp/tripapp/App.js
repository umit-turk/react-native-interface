import React from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {COLORS, icons, SIZES} from './constants'

//screens 
import { OnBoarding, DestinationDetail } from './screens';
//Tabs
import Tabs from './navigation/Tabs';

const theme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
        initialRouteName="Onboarding"
        >
            {/* Screens */}
            <Stack.Screen options={{
                title:null,
                headerStyle:{
                    backgroundColor:COLORS
                },
                headerLeft:null,
                headerRight:() => (
                    <TouchableOpacity
                    style={{marginRight:SIZES.padding}}
                    onPress={() => console.log("Pressed")}
                    >
                        <Image
                        source={icons.barMenu}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                        />
                    </TouchableOpacity>
                )
            }} 
            name="Onboarding" component={OnBoarding} />

            <Stack.Screen name="DestinationDetail" component={DestinationDetail} options={{headerShown:false, }} />

            {/* Tabs */}
            <Stack.Screen 
            name="Home"
            component={Tabs}
            options={{
                title:null,
                headerStyle:{
                    backgroundColor:COLORS.white,
                },
                headerLeft:({onPress}) => (
                    <TouchableOpacity
                    style={{
                        marginLeft:SIZES.padding
                    }}
                    onPress={onPress}
                    >
                        <Image
                         source={icons.back} 
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                        }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                    style={{marginRight:SIZES.padding}}
                    onPress={() => console.log("Menu")}
                    >
                        <Image
                         source={icons.menu}
                         resizeMode="contain"
                         style={{
                             width:25,
                             height:25
                         }}
                         />

                    </TouchableOpacity>
                )
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

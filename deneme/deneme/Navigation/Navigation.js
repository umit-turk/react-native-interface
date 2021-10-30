import React from 'react'
import { View, Text } from 'react-native'
import RootNavigation from '../Navigation.js/tab'
import {NavigationContainer} from '@react-navigation/native';




const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}

export default Navigation

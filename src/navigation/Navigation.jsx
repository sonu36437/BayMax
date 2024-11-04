import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen';
import Baymax from '../screens/BaymaxScreen'
import { navigationRef } from '../utils/Navigation';

const Stack= createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef} >
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    initialRouteName='SplashScreen'
 

    
    >

        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="BaymaxScreen"
         component={Baymax}
         options={{
          animation:'flip',
          
         }}
        ></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  )
}
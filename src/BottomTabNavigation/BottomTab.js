import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeB from './HomeB';
import NotificationB from './NotificationB';
import SettingsB from './SettingsB';
import CartB from './CartB';

const MyTab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
        <MyTab.Navigator>
            <MyTab.Screen name='HomeB' component={HomeB} />
            <MyTab.Screen name='NotificationB' component={NotificationB} />
            <MyTab.Screen name='SettingsB' component={SettingsB} />
            <MyTab.Screen name='CartB' component={CartB} />
        </MyTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab
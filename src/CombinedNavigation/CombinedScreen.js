import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeB from '../BottomTabNavigation/HomeB';
import NotificationB from '../BottomTabNavigation/NotificationB';
import SettingsB from '../BottomTabNavigation/SettingsB';
import CartB from '../BottomTabNavigation/CartB';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Wishlist from './Wishlist';
import Profile from './Profile';
import Orders from './Orders';

const MyTab = createBottomTabNavigator();
const MyDrawerTab = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <MyDrawerTab.Navigator>
      <MyDrawerTab.Screen name="homeB" component={HomeB} />
      <MyDrawerTab.Screen name="Wishlist" component={Wishlist} />
      <MyDrawerTab.Screen name="Profile" component={Profile} />
      <MyDrawerTab.Screen name="Orders" component={Orders} />
    </MyDrawerTab.Navigator>
  );
};

const CombinedScreen = () => {
  return (
    <NavigationContainer>
      <MyTab.Navigator>
        <MyTab.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false,
        title: 'HomeB'}}
        />
        <MyTab.Screen name="NotificationB" component={NotificationB} />
        <MyTab.Screen name="SettingsB" component={SettingsB} />
        <MyTab.Screen name="CartB" component={CartB} />
      </MyTab.Navigator>
    </NavigationContainer>
  );
};

export default CombinedScreen;

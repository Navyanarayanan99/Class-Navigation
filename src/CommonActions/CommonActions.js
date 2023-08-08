import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeC from './HomeC';
import NotificationC from './NotificationC';
import ProfileC from './ProfileC';
import SettingsC from './SettingsC';
import CartC from './CartC';
import WishlistC from './WishlistC';


const MyNav = createNativeStackNavigator();
const CommonAction = () => {
  return (
    <NavigationContainer>
      <MyNav.Navigator>
        <MyNav.Screen name="Home" component={HomeC} />
        <MyNav.Screen name="Notification" component={NotificationC} />
        <MyNav.Screen name="Settings" component={SettingsC} />
        <MyNav.Screen name="Cart" component={CartC} />
        <MyNav.Screen name="Wishlist" component={WishlistC} />
        <MyNav.Screen name="Profile" component={ProfileC} />
      </MyNav.Navigator>
    </NavigationContainer>
  );
};

export default CommonAction;

//common actions
//navigate
//reset
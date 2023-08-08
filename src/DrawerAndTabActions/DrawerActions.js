import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeDrawer from '../Drawer/HomeDrawer';
import NotificationD from '../Drawer/NotificationD';
import SettingsD from '../Drawer/SettingsD';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartB from '../BottomTabNavigation/CartB';

const MyDrawer = createDrawerNavigator();
const TabNav = createBottomTabNavigator();

const Tab = () => {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name='HomeDrawer' component={HomeDrawer}/>
            <TabNav.Screen name='CartB' component={CartB}/>
        </TabNav.Navigator>
    )
}

const DrawerActions = () => {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="Tab" component={Tab} options={{headerShown: false}} />
        <MyDrawer.Screen name="NotificationD" component={NotificationD} />
        <MyDrawer.Screen name="SettingsD" component={SettingsD} />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerActions;

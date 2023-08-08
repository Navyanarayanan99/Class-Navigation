import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeB from '../BottomTabNavigation/HomeB';
import ChatB from '../BottomTabNavigation/ChatB';
import WishlistC from '../CommonActions/WishlistC';
import NotificationB from '../BottomTabNavigation/NotificationB';
import SettingsD from '../Drawer/SettingsD';
import ProfileM from '../MaterialBottomTab/ProfileM';
import Title from './Title';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Drawerr = createDrawerNavigator();
const TopNav = createBottomTabNavigator();

const Tab = () => {
  return (
    <TopNav.Navigator>
      <TopNav.Screen name="Home" component={HomeB} />
      <TopNav.Screen name="Chat" component={ChatB} />
      <TopNav.Screen name="Wishlist" component={WishlistC} />
    </TopNav.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawerr.Navigator>
      <Drawerr.Screen
        name="Tab"
        component={Tab}
        options={{headerShown: false}}
      />
      <Drawerr.Screen name="Notification" component={NotificationB} />
      <Drawerr.Screen name="Settings" component={SettingsD} />
    </Drawerr.Navigator>
  );
};

const CustomHeader = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileM}
          options={{
            //   title: 'Hi user!', headerStyle: {
            //   backgroundColor: 'blue'
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold'
            // }
            headerTitle: props => <Title {...props} />,
            // headerRight: () => (
            //   <TouchableOpacity>
            //     <AntDesign name="user" size={20} />
            //   </TouchableOpacity>
            // ),
            // headerLeft: () => (
            //   <TouchableOpacity>
            //     <AntDesign name="user" size={20} />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomHeader;

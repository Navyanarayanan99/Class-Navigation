import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerActions, NavigationContainer, useNavigation} from '@react-navigation/native';
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
import CustomHeader from '../CustomHeader/CustomHeader';
import MyTabBar from '../CustomTabFooter/MyTabBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyDrawer from './MyDrawer';


const Stack = createNativeStackNavigator();
const Drawerr = createDrawerNavigator();
const TopNav = createBottomTabNavigator();

const LeftIcon = () => {
    const navigation = useNavigation();
    const handleOpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }
    return (
        <TouchableOpacity style={{marginHorizontal: 10}} onPress={handleOpenDrawer}>
          <AntDesign name= 'appstore1' color = {'#0096ff'} size= {25} />
        </TouchableOpacity>
    )
}

const Tab = () => {
  return (
    <TopNav.Navigator tabBar={props => <MyTabBar {...props}/>}>
      <TopNav.Screen name="Home" component={HomeB} options={{headerLeft: () => <LeftIcon />,}} />
      <TopNav.Screen name="Cart" component={ChatB} />
      <TopNav.Screen name="Wishlist" component={WishlistC} />
    </TopNav.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawerr.Navigator drawerContent={props => <MyDrawer {...props} />}>
      <Drawerr.Screen
        name="Tab"
        component={Tab}
        options={{ headerShown: false, title: 'Home'}}
      />
      <Drawerr.Screen name="Notification" component={NotificationB} />
      <Drawerr.Screen name="Settings" component={SettingsD} />
    </Drawerr.Navigator>
  );
};

const CustomDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileM}
        //   options={{
        //    header : props => <CustomHeader {...props} />,
        //   }}
        />
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false, }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomDrawer;

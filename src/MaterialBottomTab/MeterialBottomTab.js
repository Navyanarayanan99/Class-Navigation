import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeM from './HomeM';
import ProfileM from './ProfileM';
import SettingsM from './SettingsM';
import CartM from './CartM';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Home';
import Profile from '../CombinedNavigation/Profile';

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MeterialTopTab = () => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'pink',  
      }}
      screenOptions={{tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'green', tabBarStyle: {
      backgroundColor:'yellow'
    }}}
      tabBarPosition='top'
      // screenOptions={{
      //   //tabBarShowLabel: false
      // }}
      >
      <TopTab.Screen name="Home" component={Home} options={{tabBarIcon: ({color}) => (
        <AntDesign name='home' size={28} color={color} />
      ),
      }}/>
      <TopTab.Screen name="Profile" component={Profile} />
    </TopTab.Navigator>
  );
};

const MeterialBottomTab = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator activeColor='red' inactiveColor='black' shifting= {true}>
        <BottomTab.Screen
          // name="HomeM"
          // component={HomeM}
          name="MeterialTopTab"
          component={MeterialTopTab}
          options={{
            title: 'Home',
            tabBarIcon: color => (
              <AntDesign name="home" size={20} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="ProfileM"
          component={ProfileM}
          options={{
            tabBarIcon: () => (
              <AntDesign name="notification" size={20} color={'#000'} />
            ),
          }}
        />
        <BottomTab.Screen
          name="SettingsM"
          component={SettingsM}
          options={{
            tabBarIcon: () => <Entypo name="chat" size={20} color={'#000'} />,
            tabBarBadge: 1,
          }}
        />
         <BottomTab.Screen
          name="CartM"
          component={CartM}
          options={{
            tabBarIcon: () => <Entypo name="chat" size={20} color={'#000'} />,
            tabBarBadge: 1,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MeterialBottomTab;

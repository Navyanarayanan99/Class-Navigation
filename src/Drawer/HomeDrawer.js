import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { CommonActions, DrawerActions } from '@react-navigation/native';

const HomeDrawer = ({navigation, route}) => {
  const handleNavigate = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{route.name}</Text>
      <TouchableOpacity
      onPress={handleNavigate}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>
          Navigate to notifications
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeDrawer;
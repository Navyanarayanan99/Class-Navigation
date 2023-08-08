import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CommonActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const MyTabBar = props => {
  const handleNavigator = name => {
    props.navigation.dispatch(CommonActions.navigate(name));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
      }}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;

        const icon =
          route.name === 'Home' ? (
            <AntDesign
              name="home"
              size={20}
              color={isFocused ? 'blue' : '#444'}
            />
          ) : route.name === 'Cart' ? (
            <AntDesign
              name="shoppingcart"
              size={20}
              color={isFocused ? 'blue' : '#444'}
            />
          ) : route.name === 'Wishlist' ? (
            <AntDesign
              name="hearto"
              size={20}
              color={isFocused ? 'blue' : '#444'}
            />
          ) : null;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            onPress={() => handleNavigator(route.name)} style={{justifyContent:'center',alignItems:'center'}}>
            {icon}
            <Text style={{color: isFocused ? 'blue' : '#444', fontSize: 16}}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {
  NavigationContainer,
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Home = props => {
  //   const {navigation} = props;
  const [name, setName] = useState('');
  useEffect(() => {
    setName('XYZ');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'green'}}>Home - XYZ</Text>
      <Button
        {...props}
        //name={name}
        onPress={() =>
          props.navigation.navigate('ProfileScreen', {Myname: name})
        }
      />
    </View>
  );
};

const Button = ({navigation, route, name, onPress}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
      onPress={onPress}
      //onPress={() => navigation.navigate('ProfileScreen', {Myname: name})}
    >
      <Text style={{color: '#fff', fontSize: 17}}>Button</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({navigation, route}) => {
  const name = route.params.Myname;
  console.log('new',name)
  const isFocused = useIsFocused();
  //console.warn(isFocused);
  return (
    <View>
      <Text>
        Hai {name} {isFocused ? 'You are focused to profile screen' : ''}
      </Text>
      <ProfileImage />
      <TouchableOpacity
        style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
        onPress={() => navigation.goBack()}>
        <Text style={{color: '#fff', fontSize: 17}}>GoBack</Text>
        <Button onPress={() => navigation.navigate('Settings', {Myname: name})} />
      </TouchableOpacity>
    </View>
  );
};

const ProfileImage = () => {
  const route = useRoute();
  const name = route.params.Myname;
  return (
    <View>
      <Text>Hai {name}</Text>
    </View>
  );
};

const Settings = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const name = route.params.Myname;
  useFocusEffect(
    React.useCallback(() => {
      setCount(count + 1);
      //   setInterval(() => {
      //     setCount(count + 1);
      //   }, 1000);
      //   return clearInterval();
    }, []),
  );
  console.warn(name);
  return (
    <View style={{backgroundColor: '#000', padding: 10, margin: 10}}>
      <Text style={{color: '#fff', fontSize: 17}}>Hii - {count}</Text>
      <Button onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const Cart = () => {
  return (
    <View style={{backgroundColor: '#000', padding: 10, margin: 10}}>
      <Text style={{color: '#fff', fontSize: 17}}>Hii </Text>
    </View>
  );
};



class NavigationHook extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            
            headerTintColor: '#fff',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => {
                return <Text style={{color: '#fff'}}>Right</Text>;
              },
              headerLeft: () => {
                return (
                  <Text style={{color: '#fff', marginRight: 20}}>Left</Text>
                );
              },
            }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerRight: () => {
                return <Text style={{color: '#fff'}}>Right</Text>;
              },
              headerLeft: () => {
                return (
                  <Text style={{color: '#fff', marginRight: 20}}>Left</Text>
                );
              },
            }}
          />
        
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerRight: () => {
                return <Text style={{color: '#fff'}}>Right</Text>;
              },
              headerLeft: () => {
                return (
                  <Text style={{color: '#fff', marginRight: 20}}>Left</Text>
                );
              },
            }}
          />
        <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default NavigationHook;

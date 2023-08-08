//Moving b/w screens

import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = props => {
  const [name, setName] = useState('');
  useEffect(() => {
    setName('XYZ');
  }, []);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'green'}}>Hello guys - Home</Text>
      <Button {...props} name= {name}/>
    </View>
  );
};

class Button extends Component {
  render() {
    const {navigation, name} = this.props; //or
    // const navigation = this.props.navigation
    return (
      <TouchableOpacity
        style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
        onPress={() => navigation.navigate('ProfileScreen', {Myname: name})}>
        <Text style={{color: '#fff', fontSize: 17}}>Button</Text>
      </TouchableOpacity>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    //console.warn(this.props.route)
    const name = this.props.route.params.Myname;
    return (
      <View>
        <Text>Hai {name}</Text>
      </View>
    );
  }
}
export class PassingParams extends Component {
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default PassingParams;

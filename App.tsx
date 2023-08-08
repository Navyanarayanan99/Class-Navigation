//Moving b/w screens

import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/demo/Signup';
import LoginScreen from './src/demo/Login';

const Stack = createNativeStackNavigator();

// class InitialComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Initial Screen</Text>
//         <TouchableOpacity
//           style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}
//           onPress={() => this.props.navigation.navigate('FirstScreen')}>
//           <Text style={{color: '#fff'}}>Go to First screen</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const FirstScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 30, color: 'green'}}>FirstScreen</Text>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('SecondScreen')}
//         style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}>
//         <Text style={{color: '#fff'}}>Go to second Page</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const SecondScreen = ({navigation}) => {
//   return (
//     <View>
//       <Text>SecondScreen</Text>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{backgroundColor: '#f4511e', padding: 10, margin: 10}}>
//         <Text style={{color: '#fff'}}>Go back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
export class App extends Component {
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
          {/* <Stack.Screen
            name="InitialComponent"
            component={InitialComponent}
            options={{
              //headerShown: false,
              title: 'Hello',
            }}
          />
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{title: 'First Screen'}}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{title: 'Second Screen'}}
          /> */}
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={Signup}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
